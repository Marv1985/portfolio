import deathStar_64 from "/home/marv/react-projects/portfolio/src/Header/images/death-star-64.png";
import deathStar_32 from "/home/marv/react-projects/portfolio/src/Header/images/death-star-32.png";
import "/home/marv/react-projects/portfolio/src/Header/Css/menuButtonImage.css";
import "/home/marv/react-projects/portfolio/src/Header/Css/menuButton.css";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-scroll";

export default function MenuButton() {
  const [show, setShow] = useState(true);

  const handleToggle = useCallback(() => setShow((prevShow) => !prevShow), []);

  /* hide overflow when menu is open */
  useEffect(() => {
    if (show === false) {
      document.body.style.overflow = "hidden";
    } else if (show === true) {
      document.body.style.overflow = "";
    }
  }, [show]);

  return (
    <div id="home">
      {/* menu popout */}
      <div>
        <div className={show ? "menu-close" : "menu-overlay"}></div>
        <div className={show ? "menu-close2" : "menu-links"}>
          <span onClick={handleToggle}>
            <i className="arrow left"></i>
          </span>
          <nav className="options">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleToggle}
            >
              Home<hr></hr>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              onClick={handleToggle}
            >
              About<hr></hr>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleToggle}
            >
              Projects<hr></hr>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              onClick={handleToggle}
            >
              Contact<hr></hr>
            </Link>
          </nav>
          <span className="by">BY MARVIN SHANNON</span>
        </div>
      </div>

      {/* menu button */}
      <div className="home-button">
        <img
          onClick={handleToggle}
          src={deathStar_64}
          srcSet={`${deathStar_64} 64w, ${deathStar_32} 32w`}
          sizes={"calc(19px + 2.2vw)"}
          alt="death star"
        />
      </div>
    </div>
  );
}
