import "./Hero.css";
import SphereAnimation from "./SphereAnimation";
import CodeRain from "./CodeRain";
import { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Team from "./Team/Team";
import Footer from "./Footer/Footer";
import Header from "./Header/header";
import img from "../assets/mihir.jpeg";
import img1 from "../assets/kuldeep.jpg";
import img2 from "../assets/krishna.jpeg";
import img3 from "../assets/manish.jpg";
import { FaBroom } from 'react-icons/fa';
import LinkContainer from './LinkContainer';
import ml from '../../public/machinelearning.svg'
import db from '../../public/database.svg'
import tf from '../../public/24.svg'
import verify from '../../public/verify.svg'
function Hero() {
  const images = { img, img1, img2, img3 };
  const [color, setColor] = useState("purple");

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  const [phishingResult, setPhishingResult] = useState("");
  const [urlInput, setUrlInput] = useState("");

  const handleClear = () => {
    setUrlInput("");
    setPhishingResult("");
  };

  const teamMembers = [
    // { name: 'Mihir Jaiswal', photo: '/photos/SP.png' },
    // { name: 'Kuldeep verma', photo: '/photos/pic1.png' },
    // { name: 'Krishna Vasuniya', photo: '/photos/SS.JPG' },
    // { name: 'Manish Bachhane', photo: '/photos/IMG_20230822_100155 - .jpg' }
  ];

  const [faqs, setFaqs] = useState([
    {
      question: "What is this website about?",
      answer: "This website is about phishing attack detection. Our goal is to minimize the phishing attacks that are increasing day by day.",
      isOpen: false,
    },
    {
      question: "Can I contribute to the website's content?",
      answer: "Absolutely! We encourage active participation from everyone. You can contribute to website development if you have the skills.",
      isOpen: false,
    },
    {
      question: "Is this website free to use?",
      answer: "Yes, our platform is entirely open-source and free to use. Our goal is to spread awareness about phishing attacks and other cybersecurity threats.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
    setFaqs(updatedFaqs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = e.target.elements.url.value;

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });
      
      const data = await response.json();
      setPhishingResult(data.prediction);

    } catch (error) {
      console.error('Error:', error);
    }
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
              <div className="text-base py-3 -mt-4 -ml-8 text-white text-center cursor-pointer bg-gray-800 rounded-sm">Add Extension</div>
            </div>
          </div>

          <div className="globe">
            <SphereAnimation />
          </div>
        </div>

        <ScrollTrigger>
        <div className="p-4 md:p-8 mt-6 mb-12 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
  {[
    {
      img: ml,
      end: 5,
      color: "text-blue-600",
      label: "Algorithms",
      duration: 3,
    },
    {
      img: db,
      end: 30000,
      color: "text-green-600",
      label: "Dataset",
      duration: 5,
      suffix: "+",
    },
    {
      img: verify,
      end: 2024,
      color: "text-purple-600",
      label: "Established",
    },
    {
      img: tf,
      end: "24/7",
      color: "text-red-600",
      label: "24/7 Support",
    },
  ].map(({ img, end, color, label, duration = 3, suffix = "" }, index) => (
    <div
      key={index}
      className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 md:bg-opacity-100 flex flex-col md:flex-row items-center justify-around py-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="w-20 h-20 mb-4 flex items-center justify-center">
        <img src={img} alt={`${label} Icon`} className="w-full h-full object-contain rounded-lg border border-white p-2 bg-white" />
      </div>
      <div className="text-center">
        <h1 className={`text-2xl md:text-4xl font-bold ${color}`}>
          {typeof end === "number" ? (
            <CountUp start={0} end={end} duration={duration} delay={0} />
          ) : (
            end
          )}
          {suffix}
        </h1>
        <p className="text-sm md:text-lg font-medium text-gray-100 md:text-gray-700 mt-2">{label}</p>
      </div>
    </div>
  ))}
</div>

        </ScrollTrigger>

        <div className="members">
          <div className="title">
            {/* <h1>HACKTIVISTS</h1> */}
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
          </div>
        </div>

        <LinkContainer
          handleSubmit={handleSubmit}
          urlInput={urlInput}
          setUrlInput={setUrlInput}
          handleClear={handleClear}
          phishingResult={phishingResult}
        />

        <div className="flex flex-wrap flex-col md:flex-row">
          <div className="md:w-1/2 text-center mb-12 mt-12 px-4 md:px-12">
            <img src="https://preview.redd.it/05uhd2ihjs671.gif?width=1920&auto=webp&s=2cfe2e79dafaccd849f4d2b7f2622ea565c748af" alt="" className="img" />
          </div>

          <div className="w-full md:w-1/2 text-center flex flex-col">
            <div className="text-center mb-12 mt-2 md:mt-12 px-6 py-4 md:py-0 md:px-12 border border-gray-600 rounded-lg md:border-0">
              <p className="text-l md:text-xl text-gray-200 text-justify">CyberSphere is a browser extension and website designed to detect phishing attacks using machine learning techniques. The system is built using React.js, Three.js, Tailwind CSS for the frontend, and vanilla JavaScript for the extension. The machine learning models are trained using XGBoost, Random Forest, Decision Tree, and SVM algorithms.</p>
            </div>
            <div>
              <Link to="/">
                <button className="btn">
                  <span className="btn__inner">
                    <span className="btn__slide" style={{ backgroundColor: "#750475" }}></span>
                    <span className="btn__content">Click Here</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div id="about" className="about">
          <Team images={images} />
        </div>

        <div className="faq-container mt-10">
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
                {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
              </li>
            ))}
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Hero;
