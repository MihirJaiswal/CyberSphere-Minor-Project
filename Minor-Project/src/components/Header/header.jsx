import { useState } from "react";
import logo from "../../assets/cybercelllogoo.png";
import icon from "../../assets/hacker.png";

const Header = ({ updateColor }) => {
  const getRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  };

  return (
    <div className="header flex items-center justify-between p-4  backdrop-blur-sm  text-white">
      <a href="/">
        <img 
          width={70} 
          src={logo} 
          alt="cyberSphere" 
          style={{ cursor: "pointer" }} 
        />
      </a>
      <div className="flex items-center gap-4">
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
        <nav className="navbar">
          <ul className="flex gap-4">
          
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
