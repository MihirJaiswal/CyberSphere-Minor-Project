import React, { useState } from 'react';
import CodeRain from './CodeRain';
import Header from './Header/header';
import EarthScene from './EarthScene';
import "./About.css";
import Footer from './Footer/Footer';

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
            <h1 className='text-5xl font-bold text-center mt-60 mb-12'>Tech Stack</h1>
          </div>
          <div className='mb-2  text-3xl font-bold flex flex-col md:flex-row gap-32  justify-center '>
            <div className="bg-gray-900  px-8">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg shadow-lg md:p-8">
                    <div className="relative overflow-hidden">
                      <img className="object-cover w-full h-full" src="https://i.ibb.co/9wvF41N/machine-learning-examples-applications.png" alt="Product" />
                      <div className="absolute inset-0 bg-black opacity-40"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4">Machine Learning</h3>
                    <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                    <div className="flex items-center justify-between mt-4">
                      <ul className='list-disc text-gray-900 font-bold text-base ml-4'>
                        <li>XGBoost</li>
                        <li>Random Forest</li>
                        <li>Decision Tree</li>
                        <li>Support Vector Machine(SVM)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="relative overflow-hidden">
                      <img className="object-cover w-full h-full" src="https://i.ibb.co/3MHSpCx/images.png" alt="Product" />
                      <div className="absolute inset-0 bg-black opacity-40"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4">Frontend</h3>
                    <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                    <div className="flex items-center justify-between mt-4">
                      <ul className='list-disc text-gray-900 font-bold text-base ml-4'>
                        <li>React</li>
                        <li>Three.js</li>
                        <li>Tailwindcss</li>
                        <li>Vite</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="relative overflow-hidden">
                      <img className="object-cover w-full h-full" src="https://i.ibb.co/qWHk1QJ/img01-1.png" alt="Product" />
                      <div className="absolute inset-0 bg-black opacity-40"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
                    <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                    <div className="flex items-center justify-between mt-4">
                      <ul className='list-disc text-gray-900 font-bold text-base ml-4'>
                        <li>Django</li>
                        <li>Flask</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 py-16">
          <div className="container mx-auto">
            <h1 className="text-5xl text-center text-white font-bold mb-8">Wants to contribute?</h1>
            <p className="text-xl text-center text-white mb-8">We're always looking for passionate contributors to help us grow! Join us in our journey to make technology accessible for everyone.</p>
            <div className="flex justify-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-4 flex flex-col justify-center items-center">
                <img className="w-40" src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" alt="GitHub Icon" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">Project 1</div>
                  <p className="text-gray-700 text-base text-center">A brief description of the project goes here.</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a href="https://github.com/yourusername/project1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View on GitHub</a>
                </div>
              </div>
              <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-4 flex flex-col justify-center items-center">
                <img className="w-40 " src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" alt="GitHub Icon" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">Project 2</div>
                  <p className="text-gray-700 text-base text-center">A brief description of the project goes here.</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a href="https://github.com/yourusername/project2" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View on GitHub</a>
                </div>
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
