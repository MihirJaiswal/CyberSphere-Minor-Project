import { useState } from "react";
import logo from "../../assets/cybercelllogoo.png";
import icon from "../../assets/hacker.png";

const Header = ({ updateColor }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const getRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  };

  return (
    <div className="header">
      <a href="/">
        <img width={110} src={logo} alt="cyberSphere" style={{ cursor: "pointer", width: "70px" }}/>
      </a>
      <div className={`navbar ${navbarOpen ? "active" : ""}`}>
        <ul>
          <img
            style={{ cursor: "pointer" }}
            width={35}
            src={icon}
            alt="Hacker Icon"
            onClick={() => {
              const randomColor = getRandomColor();
              updateColor(randomColor);
            }}
          />
        </ul>
      </div>
      <div id="mobile" onClick={() => setNavbarOpen((prev) => !prev)}>
        <i id="bar" className={navbarOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
};

export default Header;
