import React, { useRef } from "react";
import "/home/marv/react-projects/portfolio/src/Contact/Css/contactDetails.css";
import { useState, useEffect } from "react";
import { send } from "emailjs-com";
import MessageSent from "../../MessageSent/MessageSent";

export default function ContactDetails() {
  const wrapperRef = useRef(null);

  /* click to hide modal */
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const [show, setShow] = useState(true);
  const [offset, setOffset] = useState(0);

  /* scroll to hide modal */
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    if (offset > 0) {
      setShow(false);
    }
    if (offset < 0) {
      setShow(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    send("service_xzco98r", "template_bdzz1wa", toSend, "ejcMDdG0HzSXhDJhO")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setToSend({
      from_name: "",
      from_email: "",
      message: "",
    });

    setShow(true);
  };

  return (
    <div className="details-paragraph">
      {show ? (
        <div ref={wrapperRef}>
          <MessageSent />
        </div>
      ) : null}

      <p>
        If you have any questions please feel free to drop me a message and I
        will get back to you!
      </p>

      <div className="input-boxes">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            title="Please enter your name"
            name="from_name"
            pattern="[a-zA-Z0-9]+"
            type="text"
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            title="Please enter your e-mail"
            type="email"
            name="from_email"
            value={toSend.from_email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            title="Message input box"
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
            required
          ></textarea>

          <div className="wrapper">
            <button type="submit">
              <span>SUBMIT</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
