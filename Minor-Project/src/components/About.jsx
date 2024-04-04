import React, { useState } from 'react';

import CodeRain from './CodeRain';
import Header from './Header/header';
import EarthScene from './EarthScene';
import "./About.css";
import Footer from './Footer/Footer';
import CustomCard from './CustomCard';
import { FaGithub } from 'react-icons/fa';

function About() {
  const [color, setColor] = useState("#BB0E5C");

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <CodeRain Color={color}/>
      <Header updateColor={updateColor} />
      <div className=''>
        <div className='flex flex-col md:flex-row gap-32'>
          <div className='w-full md:w-1/2 relative'>
            <div className="hero-text mr-10">
              <h1>CyberSphere</h1>
              <p>Cyber Sphere employs advanced machine learning techniques, commodi, aliquid ut? Quo recusandae incidunt iure illum odit voluptate in quod at natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, corrupti..</p>
              <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eum, architecto voluptatum iusto, omnis minus recusandae perferendis nulla aliquam dolorem est mollitia soluta quibusdam voluptate ratione nisi enim nemo consequuntur?</p>
            </div>
            <div className='absolute -top-16 left-0'>
              <EarthScene />
            </div>
          </div>
          <div className='w-full md:w-1/2 mt-16 md:mt-0 md:ml-24 ml-0'>
            <div className='hero-text md:mr-10 mr-0'>
              <h1 className=''>Open Source</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore nihil quas quidem eos assumenda error ex similique cupiditate numquam, dicta, illo magnam magni at sunt sit accusamus. Dicta, debitis!</p>
              <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, recusandae fugiat cum et, aut eaque harum praesentium a impedit iusto reiciendis amet sint perferendis facilis consequuntur non accusantium voluptatibus omnis.</p>
            </div>
          </div>
        </div>

        <div className='bg-bg mt-20 mb-10'>
      <div className='bg-bg mt-20'>
        <h1 className='text-5xl font-bold text-center mt-64 mb-12'>Tech Stack</h1>
      </div>
      <div className='mb-2  text-3xl font-bold flex flex-col md:flex-row justify-center'>
        <CustomCard
          imageUrl="https://i.ibb.co/9wvF41N/machine-learning-examples-applications.png"
          hoverImageUrl="https://i.ibb.co/VwXmnFy/Untitled-design-2.png"
          title="Machine Learning"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."
          technologies={['XGBoost', 'Random Forest', 'Support Vector Machine(SVM)', 'Decision Tree']}
        />
        <CustomCard
          imageUrl="https://i.ibb.co/vc7VZR1/Untitled-design-4.png"
          hoverImageUrl="https://i.ibb.co/LpwYgWh/Untitled-design.png"
          title="Frontend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."
          technologies={['React', 'Three.js', 'Tailwindcss', 'Vite']}
        />
        <CustomCard
          imageUrl="https://i.ibb.co/qWHk1QJ/img01-1.png"
          hoverImageUrl="https://i.ibb.co/2jChWD5/Untitled-design-1.png"
          title="Backend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."
          technologies={['Django', 'Flask']}
        />
      </div>
    </div>


        <div className="bg-gray-800 py-10">
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-5xl text-center text-white font-bold mb-0 md:mb-8">Wants to contribute?</h1>
            <p className="md:text-xl text-base text-center text-text mb-8">We're always looking for passionate contributors to help us grow! Join us in our journey to make technology accessible for everyone.</p>
            <div className="flex justify-center">
              <div className="flex">
              
                <a href="https://github.com/yourusername/project1" className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-3 px-6 mr-4 flex items-center">
                <FaGithub className="text-3xl mr-4 text-white"/>
                  Machine learning model
                </a>
           
                <a href="https://github.com/yourusername/project2" className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-3 px-8 flex items-center">
                <FaGithub className="text-3xl mr-4 text-white"/>
                  CyberSphere web
                </a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <Footer/>
    </>
  )
}

export default About;
