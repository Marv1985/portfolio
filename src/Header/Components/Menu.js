import "/home/marv/react-projects/portfolio/src/Header/Css/menu.css";

export default function Menu() {
  return (
    <div>
      <div className="menu-overlay"></div>
      <div className="menu-links">
        <span>
          <i className="arrow left"></i>
        </span>
        <div className="options">
          <span>Home</span>
          <span>About</span>
          <span>My Work</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}
