import React from 'react'
import CodeRain from './CodeRain'
import Header from './Header/header'
import { useState } from "react";
import EarthScene from './EarthScene'
import "./About.css"

function About() {

  const [color, setColor] = useState("#BB0E5C");
  // const [navbarOpen, setNavbarOpen] = useState(false);


  const updateColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <>
      <CodeRain Color={color}/>
      <Header updateColor={updateColor} />
      <div>
      <div className='flex flex-col md:flex-row gap-24'>
      <div className='w-1/2'>
      <div className="hero-text">

            <h1>CyberSphere</h1>
            <p>Cyber Sphere employs advanced machine learning techniques  commodi, aliquid ut? Quo recusandae incidunt iure illum odit voluptate in quod at natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, corrupti..</p>
          

           

          </div>
          </div>
          <div className='absolute' style={{ left: 0 }}>
            <EarthScene />
          </div>
      <div className='w-1/2'>
     <div className='hero-text'>
     <h1>Open Source</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore nihil quas quidem eos assumenda error ex similique cupiditate numquam, dicta, illo magnam magni at sunt sit accusamus. Dicta, debitis!
      </p>
     </div>

</div>
          
  </div>

  <div>
    
  </div>
  </div>   
          
       
  </>
  )
}

export default About
