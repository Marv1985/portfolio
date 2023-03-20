import React from "react";
import UseElementOnScreen from "../../useElementOnScreen/UseElementOnScreen";
import "/home/marv/react-projects/portfolio/src/Projects/Css/projects.css";

export default function ProjectsHeader() {
  const [containerRef, isVisible] = UseElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div>
      <div
        ref={containerRef}
        className={isVisible ? "project-header" : "project-header-hid"}
      >
        <h2>PROJECTS</h2>
        <hr></hr>
      </div>
    </div>
  );
}
