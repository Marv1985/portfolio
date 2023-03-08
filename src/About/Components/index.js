import DropDownMenu from "../../DropdownMenu/Components/DropdownMenu";
import UseElementOnScreen from "../../useElementOnScreen/UseElementOnScreen";
import AboutMe from "./AboutMe";
import "/home/marv/react-projects/portfolio/src/About/Css/about.css";

export default function About() {
  const [containerRef, isVisible] = UseElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div className="about-wrapper">
      <DropDownMenu />
      <div className={isVisible ? "about-header" : "about-header-hid"}>
        <h2>About</h2>
        <hr></hr>
      </div>
      <div ref={containerRef}></div>
      <AboutMe />
    </div>
  );
}
