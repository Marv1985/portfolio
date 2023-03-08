import UseElementOnScreen from "../../useElementOnScreen/UseElementOnScreen";
import "/home/marv/react-projects/portfolio/src/About/Css/aboutMe.css";

export default function AboutMe() {
  const [containerRef, isVisible] = UseElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div className="about-me-wrapper">
      {/* grid p1 */}
      <div className="about-wrap">
        <div className={isVisible ? "about-p1" : "onscreen"}>
          <div>
            const <span>webDev</span>
          </div>
          <span>=</span>
          <span>{"{"}</span>
        </div>

        <div className={isVisible ? "about-p2" : "about-p2-hid"}>
          <div ref={containerRef}>Marv : </div>
          <p>
            " About Fully committed to the philosophy of life-long learning, I’m
            a full stack developer with a deep passion for JavaScript, React and
            all things web development. The unique combination of creativity,
            logic, technology and never running out of new things to discover,
            drives my excitement and passion for web development. When I’m not
            at my computer I like to spend my time reading, keeping fit and
            playing guitar. "
          </p>
        </div>

        <div className={isVisible ? "about-p3" : "about-p2-hid"}>
          <span>{"}"}</span>
        </div>
      </div>

      {/* grid p2 */}
      <div className="component"></div>
    </div>
  );
}
