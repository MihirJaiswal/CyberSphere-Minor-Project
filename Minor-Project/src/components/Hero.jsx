import "./Hero.css";
import SphereAnimation from "./SphereAnimation";
import CodeRain from "./CodeRain";
import { useState } from "react";
// import icon from "../assets/hacker.png";
import { Link } from "react-router-dom";

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Team from "./Team/Team"

import Footer from "./Footer/Footer";
import Header from "./Header/header";
import Games from "./Games";
import img from "../assets/mihir.jpeg"
import img1 from "../assets/kuldeep.jpg"
import img2 from "../assets/krishna.jpeg"
import img3 from "../assets/manish.jpg"

import anime from "animejs";


function Hero() {

  const images = {
    img,
    img1,
    img2,
    img3
  }
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
        "This website is about phising attack detection, our goal is to minimize the phishing attack that is increasing day by day.",
      isOpen: false,
    },
    {
      question: "Can I contribute to the website's content ?",
      answer:
        "Absolutely! We encourage active participation from everyone. You can contribute in website development if you have the skills.",
      isOpen: false,
    },
    {
      question: "Is this website free to use ?",
      answer:
        "Yes, our platform is entirely open-source and free to use. Our goal is to spread awareness and towards phising attacks and other cyber security threads.",
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
            <p>Cyber Sphere employs advanced machine learning techniques to swiftly detect and prevent phishing attacks. Our platform analyzes user behavior, identifying suspicious activities to ensure robust cybersecurity protection for online environments.</p>
            <div className="button">
          <div className="explore">Add  Extension</div>
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

       

        <div className="link-container flex justify-center flex-col items-center mb-4">
         <div className="title1">
         <h1 className="title1 text-center text-xl md:text-4xl mb-10 font-bold">
         You can run a test on the link below
         </h1>
         </div>
          <form className="w-full max-w-xl mx-auto">   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-l text-gray-900 border border-gray-600 rounded-lg bg-white-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-900" placeholder="Enter the link" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">Check</button>
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
        <div className="flex flex-wrap flex-col md:flex-row">
          <div className="md:w-1/2 text-center mb-12 mt-12 px-4 md:px-12">
            <img src="https://preview.redd.it/05uhd2ihjs671.gif?width=1920&auto=webp&s=2cfe2e79dafaccd849f4d2b7f2622ea565c748af" alt="" className="img" />
          </div>

          <div className="w-full md:w-1/2 text-center flex flex-col">
            <div className=" text-center mb-12 mt-2 md:mt-12 px-6 py-4 md:py-0 md:px-12 border border-gray-600 rounded-lg md:border-0">
              <p className="text-l md:text-xl text-gray-200 ">At our platform, we're dedicated to raising awareness about phishing attacks and other cybersecurity threats. Through engaging games and quizzes, we provide an interactive learning experience where users can understand the tactics used by cybercriminals and learn how to protect themselves online. Click below to start your cybersecurity journey with our quizzes!</p>
            </div>
            <div>
            <Link to="/games">
            <button className="btn">
              <span className="btn__inner">
                <span className="btn__slide" style={{ backgroundColor: "#E924EF" }}></span>
                <span className="btn__content">Click Here</span>
              </span>
            </button>
          </Link>
            </div>
          </div>
        </div>
       </div>
        
          
       
        

        <div id = "about" className="about">
         <Team images={images}/>
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
