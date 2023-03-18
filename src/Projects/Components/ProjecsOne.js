import React from "react";
import "/home/marv/react-projects/portfolio/src/Projects/Css/projects-one.css";
import strengthShop1828 from "/home/marv/react-projects/portfolio/src/Projects/Images/Strength-shop/Strength-shop-1828.png";
import strengthshop1080 from "/home/marv/react-projects/portfolio/src/Projects/Images/Strength-shop/strength-shop-1080.png";
import strengthshop720 from "/home/marv/react-projects/portfolio/src/Projects/Images/Strength-shop/strength-shop-720.png";
import strengthshop500 from "/home/marv/react-projects/portfolio/src/Projects/Images/Strength-shop/strength-shop-500.png";
import UseElementOnScreen from "../../useElementOnScreen/UseElementOnScreen";

export default function ProjecsOne() {
  const [containerRef, isVisible] = UseElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div className="project-one-wrapper">
      <div
        ref={containerRef}
        className={isVisible ? "project-header" : "project-header-hid"}
      >
        <h2>PROJECTS</h2>
        <hr></hr>
      </div>

      <div className="strength-shop-project">
        <img
          src={strengthShop1828}
          srcSet={`${strengthShop1828} 1828w, ${strengthshop1080} 1080w, ${strengthshop720} 720w, ${strengthshop500} 500w`}
          alt="strength shop site screen shot"
        />
        <div className="about-shop">
          <div className="about-site">
            <p>Strength Shop Website</p>
            <br />
            <p>
              A clone of one of a website I sometimes use for purchasing gym
              equipment.
            </p>
          </div>
          <div className={isVisible ? "find-site" : "find-site-hid"}>
            <a href={"#0"}>Live App</a>
            <a href={"#0"}>GIT Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
}
