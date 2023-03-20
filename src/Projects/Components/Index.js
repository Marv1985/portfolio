import React from "react";
import MyPortfolio from "./LeftSide/MyPortfolio";
import ProjectsHeader from "./ProjectsHeader";
import AnimeGame from "./RightSide/AnimeGame";
import StrengthShop from "/home/marv/react-projects/portfolio/src/Projects/Components/LeftSide/StrengthShop";

export default function Projects() {
  return (
    <div>
      <ProjectsHeader />
      <StrengthShop />
      <AnimeGame />
      <MyPortfolio />
    </div>
  );
}
