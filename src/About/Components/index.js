import DropDownMenu from "../../DropdownMenu/Components/DropdownMenu";
import UseElementMoreThanOnce from "../../useElementOnScreen/useElementMoreThanOnce";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import "/home/marv/react-projects/portfolio/src/About/Css/about.css";

export default function About() {
  const [containerRef, isVisible] = UseElementMoreThanOnce({
    root: null,
    rootMargin: "300px",
    threshold: 0.1,
  });

  return (
    <div className={isVisible ? "about-wrapper" : "padding"}>
      <div className={isVisible ? "dropdown-wrapper" : "fixed"}>
        <DropDownMenu />
      </div>
      <div ref={containerRef} className="about-header">
        <h2>About</h2>
        <hr></hr>
      </div>
      <div></div>
      <div className="about-me-wrapper">
        <AboutMe />
        <div className="component">
          <Skills />
        </div>
      </div>
    </div>
  );
}
