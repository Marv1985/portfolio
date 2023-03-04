import deathStar from "/home/marv/react-projects/portfolio/src/Header/images/death-star.svg";
import "/home/marv/react-projects/portfolio/src/Header/Css/homeButton.css";
import "/home/marv/react-projects/portfolio/src/Header/Css/menu.css";
import Menu from "./Menu";

export default function HomeButton() {
  return (
    <div>
      <Menu />
      <div className="home-button">
        <img src={deathStar} alt="death star" />
      </div>
    </div>
  );
}
