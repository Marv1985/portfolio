import deathStar_64 from "/home/marv/react-projects/portfolio/src/Header/images/death-star-64.png";
import deathStar_32 from "/home/marv/react-projects/portfolio/src/Header/images/death-star-32.png";
import "/home/marv/react-projects/portfolio/src/Header/Css/menuButtonImage.css";
import "/home/marv/react-projects/portfolio/src/Header/Css/menuButton.css";
import { useState, useCallback, useEffect } from "react";

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
    <div>
      {/* menu popout */}
      <div>
        <div className={show ? "menu-close" : "menu-overlay"}></div>
        <div className={show ? "menu-close2" : "menu-links"}>
          <span onClick={handleToggle}>
            <i className="arrow left"></i>
          </span>
          <nav className="options">
            <a href={"#0"}>
              Home <hr></hr>
            </a>
            <a href={"#0"}>
              About <hr></hr>
            </a>
            <a href={"#0"}>
              Projects <hr></hr>
            </a>
            <a href={"#0"}>
              Contact <hr></hr>
            </a>
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
