import React from "react";
import GameCard from "./GameCard";
import "./Games.css";
import img from "../assets/a-co.png";
import img2 from "../assets/a-cool-modern-animated-.png";
import img3 from "../assets/g.png";
import Header from "./Header/header";
import { useState } from "react";
import CodeRain from "./CodeRain";

function Games() {
  const [color, setColor] = useState("red");

  const updateColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <div id="vanta">
     <CodeRain Color={color}/>
      <Header updateColor={updateColor} />
      <div className="main text-center flex flex-wrap justify-center items-center p-10 gap-20">
        <GameCard
          imgSrc="https://s25.postimg.cc/frbd9towf/cta-2.png"
          title="QUIZ FOR GEEKS"
          subtitle="CyberSphere"
          playLink="#"
        />
        <GameCard
          imgSrc='https://s25.postimg.cc/hj4c4qnov/cta-3.png'
          title="WORD SCRAMBLE"
          subtitle="CYBERCELL"
          playLink="#"
        />
        <GameCard
          imgSrc='https://s25.postimg.cc/l2q9ujy4f/cta-4.png'
          title="COMING SOON"
          subtitle="CYBERCELL"
          playLink="https://colorlib.com/etc/404/colorlib-error-404-6/"
        />
      </div>
    </div>
  );
}

export default Games;
