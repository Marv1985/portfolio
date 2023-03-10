import UseElementOnScreen from "../../useElementOnScreen/UseElementOnScreen";
import "/home/marv/react-projects/portfolio/src/About/Css/aboutMe.css";

export default function AboutMe() {
  const [containerRef, isVisible] = UseElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div>
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
            " I started coding over a couple of years ago and after having
            learned the basics in Javascript and React.js I was hooked. The
            unique combination of creativity, logic, technology and it's endless
            possibilities really drives my passion for web development. My aim
            is to persue a career as a front end developer furthering my
            knowledge and learning new technologies along the way. When I’m not
            at my computer you will find me in the gym or at home watching a
            good sci-fi or anime series. "
          </p>
        </div>

        <div className={isVisible ? "about-p3" : "about-p2-hid"}>
          <span>{"}"}</span>
        </div>
      </div>

      {/* grid p2 */}
    </div>
  );
}
