import React from "react";
import "/home/marv/react-projects/portfolio/src/Contact/Css/contactDetails.css";
import { useState } from "react";

export default function ContactDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `The name you entered was: ${name} email is ${email} message is ${message}`
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="details-paragraph">
      <p>
        If you have any questions please feel free to drop me a message and I
        will get back to you!
      </p>

      <div className="input-boxes">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            title="Please enter your name"
            pattern="[a-zA-Z0-9]+"
            type="text"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="Email"
            title="Please enter your e-mail"
            type="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            name="text-area"
            title="Message input box"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          {/* <button type='submit'>submit</button> */}

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
