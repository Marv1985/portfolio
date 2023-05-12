import React from "react";
import MyPortfolio from "./RightSide/MyPortfolio";
import ProjectsHeader from "./ProjectsHeader";
import WorkoutApp from "./LeftSide/WorkoutApp";

export default function Projects() {
  return (
    <div id="projects">
      <ProjectsHeader />
      <WorkoutApp />
      <MyPortfolio />
    </div>
  );
}
