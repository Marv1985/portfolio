import React from "react";
import "/home/marv/react-projects/portfolio/src/Projects/Css/projects.css";
import strengthShop1828 from "/home/marv/react-projects/portfolio/src/Projects/Images/Strength-shop/Strength-shop-1828.png";
import strengthshop1080 from "/home/marv/react-projects/portfolio/src/Projects/Images/Strength-shop/strength-shop-1080.png";
import strengthshop720 from "/home/marv/react-projects/portfolio/src/Projects/Images/Strength-shop/strength-shop-720.png";
import strengthshop500 from "/home/marv/react-projects/portfolio/src/Projects/Images/Strength-shop/strength-shop-500.png";
import LeftSide from "/home/marv/react-projects/portfolio/src/Projects/Components/LeftSide/LeftSide.js";

export default function strengthShop() {
  const projectInfo = {
    header: {
      head: "Strength Shop Website",
    },
    paragraph: {
      para: " A clone of one of a website I sometimes use for purchasing gym equipment. Created using React.",
    },
  };

  return (
    <LeftSide
      imageOne={strengthShop1828}
      imageTwo={strengthshop1080}
      imageThree={strengthshop720}
      imageFour={strengthshop500}
      header={projectInfo.header.head}
      paragraph={projectInfo.paragraph.para}
    />
  );
}