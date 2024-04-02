import "./Hero.css";
import SphereAnimation from "./SphereAnimation";
import CodeRain from "./CodeRain";
import { useState } from "react";
// import icon from "../assets/hacker.png";
import { Link } from "react-router-dom";

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import Footer from "./Footer/Footer";
import Header from "./Header/header";
import Games from "./Games";

import anime from "animejs";


function Hero() {
  const [color, setColor] = useState("purple");
  // const [navbarOpen, setNavbarOpen] = useState(false);


  const updateColor = (newColor) => {
    setColor(newColor);
  };

  //members
  const teamMembers = [
    // { name: 'Mihir Jaiswal', photo: '/photos/SP.png' },
    // { name: 'Kuldeep verma', photo: '/photos/pic1.png' },
    // { name: 'Krishna Vasuniya', photo: '/photos/SS.JPG' },
    // { name: 'Manish Bachhane', photo: '/photos/IMG_20230822_100155 - .jpg' }
  ];

  // faq
  const [faqs, setFaqs] = useState([
    {
      question: "What is this website about ?",
      answer:
        "This website is an open-source community platform designed for cybersecurity enthusiasts. It serves as a hub for like-minded individuals to collaborate, share knowledge, and engage in discussions related to cybersecurity.",
      isOpen: false,
    },
    {
      question: "Can I contribute to the website's content ?",
      answer:
        "Absolutely! We encourage active participation from our members. You can contribute by writing articles, sharing your research, or even helping with website development if you have the skills.",
      isOpen: false,
    },
    {
      question: "Is this website free to use ?",
      answer:
        "Yes, our platform is entirely open-source and free to use. We believe in making cybersecurity knowledge accessible to everyone.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
    setFaqs(updatedFaqs);
  };

  return (
    <>
      <CodeRain Color={color} />
      <Header updateColor={updateColor} />
      <div className="hero">
        <div className="hero-main">
          <div className="hero-text">

            <h1>CyberSphere</h1>
            <p>Welcome to CyberCell GU, where we ignite Cybersecurity Awareness and Innovation. Join us in safeguarding the digital realm through cutting-edge events and initiatives. Our diverse team of dreamers, thinkers, and doers is united by a singular purpose to make the world better through knowledge. Join us today!</p>
            <div className="button">
          <div className="explore">Explore More</div>
        </div>

           

          </div>

          <div className="globe">
            <SphereAnimation />
          </div>
        </div>


      <ScrollTrigger>
     

        <div className="hero-data mt-6 ">

          <div className="data">
          <div className="data-img">
            <img src="https://www.shutterstock.com/image-vector/event-schedule-icon-260nw-606709283.jpg" alt="" />
          </div>
           <div>
           <h1>
              <CountUp start={0} end={5} duration={2} delay={0}/>
            </h1>
            <p>Conducted</p>
           </div> 
          </div>
          <div className="data">
          <div className="data-img">
            <img src="https://static.vecteezy.com/system/resources/previews/005/005/794/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="" />
          </div>
            <div>
            <h1>
            <CountUp start={0} end={50} duration={5} delay={0}/>
            +
            </h1>
            <p>Members</p>
            </div>
          </div>
          <div className="data">
          <div className="data-img">
            <img src="https://cdn.vectorstock.com/i/preview-lt/97/98/established-vector-42209798.webp" alt="" />
          </div>
            <div>
            <h1>
              2020
            </h1>
            <p>Established</p>
            </div>
          </div>
          <div className="data">
          <div className="data-img">
            <img src="https://img.freepik.com/premium-vector/247-hours-timer-symbol-black-color-flat-style_824631-673.jpg" alt="" />
          </div>
           <div>
           <h1>24/7</h1>
            <p>24/7 Support</p>
           </div>
          </div>
        </div>

      </ScrollTrigger>


        <div className="members">
          <div className="title">
          {/*   <h1>HACKTIVISTS</h1> */}
          </div>
          <div className="team-container">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-photo">
                  <img src={member.photo} alt={member.name} />
                </div>
                <div className="member-name">{member.name}</div>
              </div>
            ))}

            {/* <Link className="button-container" to="/">
              Learn More
            </Link> */}
          </div>
        </div>

       

        <div className="link-container flex justify-center flex-col items-center mb-8">
         
          <form className="w-full max-w-sm mx-auto">   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-l text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </form>
          
          <div className="w-full mt-16">
          <h1 className="text-xl text-center font-bold text-gray-900 dark:text-white underline">
            {/*  * The website is phishing 
            The website is not phising * */}
          </h1>          
          </div>
          
         
        </div>

       {/*  <div className="w-full h-24">
          <div >
            <div><button></button></div>
            <div><button></button></div>
            <div><button></button></div>
          </div>
        </div> */}

       <div>
       <div className="title mb-2">  
            <h1 className="title">Games</h1>
          </div>
        <div className="flex">
          <div className="w-1/2 text-center mb-12 mt-12 px-12">
            <img src="https://preview.redd.it/05uhd2ihjs671.gif?width=1920&auto=webp&s=2cfe2e79dafaccd849f4d2b7f2622ea565c748af" alt="" className="img" />
          </div>

          <div className="w-1/2 text-center flex flex-col">
            <div className=" text-center mb-12 mt-12 px-12">
              <p className="text-2xl text-gray-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt quis ducimus dicta quod suscipit provident, debitis consequatur nemo consectetur commodi animi fugiat et explicabo possimus eius laudantium sint, nostrum fuga cum. Itaque aliquid ipsa sit repudiandae maiores distinctio, delectus laborum error saepe architecto, corrupti mollitia aliquam eaque nam vitae quos laudantium eius necessitatibus natus. Necessitatibus quasi earum enim aliquid!</p>
            </div>
            <div>
            <Link to="/games">
            <button className="btn">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content">Click Here</span>
              </span>
            </button>
          </Link>
            </div>
          </div>
        </div>
       </div>
        
          
       
        

        <div id = "about" className="about">
          <div className="">  
            <h1>Team</h1>
          </div>
          <div className="about-container">
            <div className="about-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellat hic, exercitationem fuga recusandae autem dolores necessitatibus provident quibusdam amet beatae voluptate porro suscipit inventore asperiores doloribus nulla facilis vel eos nisi accusamus odit veritatis sint temporibus? Officia doloremque maxime ad numquam voluptatum accusamus accusantium quod vero distinctio omnis, pariatur dolorem eligendi sint commodi ratione autem illum harum perspiciatis ullam molestiae laudantium aliquid natus! Ut iure odio suscipit nulla, atque veritatis, autem tenetur nobis esse exercitationem quaerat quas rerum modi quam alias iusto, aut velit commodi doloribus quibusdam ipsum voluptate.</p>
            </div>
            <div className="about-img">
              <img src="/public/ContentPhoto.png"/>
            </div>
          </div>
        </div>

        <div className="faq-container">
  <h1>Frequently Asked Questions</h1>
  <ul className="faq-list">
    {faqs.map((faq, index) => (
      <li className="faq-item" key={index}>
        <div className="faq-question" onClick={() => toggleFAQ(index)}>
          <span className={`faq-icon ${faq.isOpen ? "open" : "closed"}`}>
            {faq.isOpen ? "-" : "+"}
          </span>
          <span className="faq-text">{faq.question}</span>
        </div>
        {faq.isOpen && <p className="faq-answer">{faq.answer}</p>}
      </li>
    ))}
  </ul>
</div>
 
      </div>



      <Footer />

    </>
  );
}

export default Hero;
