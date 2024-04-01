import { useState } from "react";
import logo from "../../assets/cybercelllogoo.png";
import icon from "../../assets/hacker.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import logo from "../assets/cybercelllogoo.png";

const Header = ({ updateColor }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="header">
      <a href="/">
        <img width={110} src={logo} alt="CyberCell Logo" style={{ cursor: "pointer", width: "70px" }}/>
      </a>
      <div className={`navbar ${navbarOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/event">Events</Link>
          </li>
          <li>
          
            <Link to="/games">Games</Link>
          </li>
    
          <li>
            <HashLink to="/#about">About</HashLink>
          </li>

          

          <img
            style={{ cursor: "pointer" }}
            width={35}
            src={icon}
            alt="Hacker Icon"
            onClick={() => {
              updateColor("green");
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
