import HeaderIntro from "./HeaderIntro";
import HomeButton from "./HomeButton";
import ParticlesConfig from "./ParticlesConfig";
import "/home/marv/react-projects/portfolio/src/Header/Css/headerMain.css";

export default function HeaderMain() {
  return (
    <div>
      <HomeButton />
      <ParticlesConfig />
      <HeaderIntro />
    </div>
  );
}
