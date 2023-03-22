import About from "./About/Components/Index";
import Contact from "./Contact/Components/Index";
import Footer from "./Footer/Footer";
import HeaderMain from "./Header/Components/Index";
import Projects from "./Projects/Components/Index";

export default function App() {
  return (
    <>
      <HeaderMain />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
