import HeaderIntro from "./HeaderIntro";
import MenuButton from "./MenuButton";
import ParticlesConfig from "./ParticlesConfig";
import "/home/marv/react-projects/portfolio/src/Header/Css/headerMain.css";

export default function HeaderMain() {
  return (
    <div>
      <MenuButton />
      <ParticlesConfig />
      <HeaderIntro />
    </div>
  );
}
