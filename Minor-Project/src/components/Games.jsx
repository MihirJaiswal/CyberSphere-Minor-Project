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
  const [color, setColor] = useState("#FB56FB");

  const updateColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <div id="vanta">
     <CodeRain Color={color}/>
      <Header updateColor={updateColor} />
      <div className="main text-center flex flex-wrap justify-center items-center p-10 gap-20">
        <GameCard
          imgSrc2="https://s25.postimg.cc/frbd9towf/cta-2.png"
          imgSrc='https://static.displate.com/324x454/displate/2023-03-13/d73fb48613893e90ce98c9746a4f77bf_5e5bba8a9994f568c8920f944e586556.avif'
          title="QUIZ FOR GEEKS"
          subtitle="CyberSphere"
          playLink="https://mihirjaiswal.github.io/quizgame/index.html"
        />
        <GameCard
          imgSrc2='https://s25.postimg.cc/hj4c4qnov/cta-3.png'
          imgSrc='https://static.displate.com/324x454/displate/2021-12-07/87f1d7e216783272c4c3601a622e2beb_f14d431f15ca41b88b6565449df15261.avif'
          title="WORD SCRAMBLE"
          subtitle="CyberShpere"
          playLink="https://basicgame.vercel.app/"
        />
        <GameCard
          imgSrc2='https://s25.postimg.cc/l2q9ujy4f/cta-4.png'
          imgSrc='https://static.displate.com/324x454/displate/2019-10-30/7e60c556072dd5d511807b20d2c000cd_71cc341a61bca3954a117b7438ae00ee.avif'
          title="COMING SOON"
          subtitle="CyberSphere"
          playLink="https://colorlib.com/etc/404/colorlib-error-404-6/"
        />
      </div>
    </div>
  );
}

export default Games;
