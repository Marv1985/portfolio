import React from "react";
import UseElementOnScreen from "../../../useElementOnScreen/UseElementOnScreen";

export default function LeftSide(props) {
  const { imageOne, imageTwo, imageThree, imageFour, header, paragraph } =
    props;

  const [containerRef, isVisible] = UseElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div className="project-wrapper">
      <div className="project-image left-border">
        <img
          src={imageOne}
          srcSet={`${imageOne} 1828w, ${imageTwo} 1080w, ${imageThree} 720w, ${imageFour} 500w`}
          alt="strength shop site screen shot"
        />
        <div ref={containerRef} className="about-project">
          <div className="about-site">
            <p>{header}</p>
            <br />
            <p>{paragraph}</p>
          </div>
          <div className={isVisible ? "find-site" : "find-site-hid"}>
            <a className="changeHide" href={"#0"}>
              Live App
            </a>
            <a href={"#0"}>GIT Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
}
