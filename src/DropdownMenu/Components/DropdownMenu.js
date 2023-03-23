import "/home/marv/react-projects/portfolio/src/DropdownMenu/Css/dropdownMenu.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function DropDownMenu() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    const onScroll = () => {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="dropdown-wrapper">
      <div className={show ? "dropdown-menu" : "dropdown-menu-reverse"}>
        <nav>
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} offset={20} duration={500}>
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
