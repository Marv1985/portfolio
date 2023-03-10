import DropDownMenu from "../../DropdownMenu/Components/DropdownMenu";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import "/home/marv/react-projects/portfolio/src/About/Css/about.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <DropDownMenu />
      <div className="about-header">
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
