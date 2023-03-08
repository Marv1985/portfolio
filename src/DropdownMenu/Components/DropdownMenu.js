import "/home/marv/react-projects/portfolio/src/DropdownMenu/Css/dropdownMenu.css";
import { useState, useEffect } from "react";

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
          <a href={"#0"}>Home</a>
          <a href={"#0"}>About</a>
          <a href={"#0"}>Projects</a>
          <a href={"#0"}>Contact</a>
        </nav>
      </div>
    </div>
  );
}
