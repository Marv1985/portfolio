import React from "react";
import RightSide from "./RightSide";
import "/home/marv/react-projects/portfolio/src/Projects/Css/projects.css";
import animeGame1828 from "/home/marv/react-projects/portfolio/src/Projects/Images/Anime-game/anime-game1828.png";
import animeGame1080 from "/home/marv/react-projects/portfolio/src/Projects/Images/Anime-game/anime-game1080.png";
import animeGame720 from "/home/marv/react-projects/portfolio/src/Projects/Images/Anime-game/anime-game720.png";
import animeGame500 from "/home/marv/react-projects/portfolio/src/Projects/Images/Anime-game/anime-game500.png";

export default function AnimeGame() {
  const projectInfo = {
    header: {
      head: "Anime Search Game",
    },
    paragraph: {
      para: " A game of find the anime character. Similar to Where's Wally. Created using React, Firebase and Jest testing.",
    },
  };

  return (
    <div>
      <RightSide
        imageOne={animeGame1828}
        imageTwo={animeGame1080}
        imageThree={animeGame720}
        imageFour={animeGame500}
        header={projectInfo.header.head}
        paragraph={projectInfo.paragraph.para}
      />
    </div>
  );
}
