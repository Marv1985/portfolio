import DropDownMenu from "../../DropdownMenu/Components/DropdownMenu";
import UseElementMoreThanOnce from "../../useElementOnScreen/useElementMoreThanOnce";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import "/home/marv/react-projects/portfolio/src/About/Css/index.css";

export default function About() {
  const [containerRef, isVisible] = UseElementMoreThanOnce({
    root: null,
    /* rootMargin 300px bottom to push 'isVisible' area up so its still technically 'isVisible' and doesn't change menu classnames when on home page */
    rootMargin: "0px 0px 700px 0px",
    threshold: 1,
  });

  return (
    <div id="about" className={isVisible ? "about-wrapper" : "padding"}>
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
