import React from "react";
import LeftSide from "./LeftSide";
import "/home/marv/react-projects/portfolio/src/Projects/Css/projects.css";
import portfolio1828 from "/home/marv/react-projects/portfolio/src/Projects/Images/My-portfolio/portfolio1828.png";
import portfolio1080 from "/home/marv/react-projects/portfolio/src/Projects/Images/My-portfolio/portfolio1080.png";
import portfolio720 from "/home/marv/react-projects/portfolio/src/Projects/Images/My-portfolio/portfolio720.png";
import portfolio500 from "/home/marv/react-projects/portfolio/src/Projects/Images/My-portfolio/portfolio500.png";

export default function MyPortfolio() {
  const projectInfo = {
    header: {
      head: "My Portfolio",
    },
    paragraph: {
      para: "Here is a link to the GitHub repository for my porfolio. Created using React and Jest testing.",
    },
  };

  return (
    <div className="changes">
      <LeftSide
        header={projectInfo.header.head}
        paragraph={projectInfo.paragraph.para}
        imageOne={portfolio1828}
        imageTwo={portfolio1080}
        imageThree={portfolio720}
        imageFour={portfolio500}
      />
    </div>
  );
}
