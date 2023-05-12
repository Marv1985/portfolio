import UseElementOnScreen from "../../../useElementOnScreen/UseElementOnScreen";

export default function RightSide(props) {
  const {
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    header,
    paragraph,
    git_url,
    target,
    live_url,
  } = props;

  const [containerRef, isVisible] = UseElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div className="project-wrapper right">
      <div className="project-image right-border">
        <div ref={containerRef} className="about-project">
          <div className="about-site">
            <p>{header}</p>
            <br />
            <p>{paragraph}</p>
          </div>
          <div className={isVisible ? "find-site" : "find-site-hid"}>
            <a className="hide-link" href={live_url} target={target}>
              Live App
            </a>
            <a href={git_url} target={target}>
              GIT Repo
            </a>
          </div>
        </div>
        <img
          src={imageOne}
          srcSet={`${imageOne} 1828w, ${imageTwo} 1080w, ${imageThree} 720w, ${imageFour} 500w`}
          alt="project"
        />
      </div>
    </div>
  );
}
