import React from 'react'
import "./Team.css";


function Team(props){
  return (
    <div>
       <section className='mt-6'>
            <h2 className='text-center text-5xl'>Meet Our Team</h2>
            <div className="container">
                <div className="card card-1">
                    <div className="content">
                        <div className="imgBx"><img src={props.img} alt="User" /></div>
                        <div className="contentBx">
                            <h3>Mihir Jaiswal<br /><span>Frontend and intregation</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li style={{ '--i': 1 }}>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                        </li>
                        <li style={{ '--i': 2 }}>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                        </li>
                        <li style={{ '--i': 3 }}>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="card card-1">
                    <div className="content">
                        <div className="imgBx"><img src={props.img} alt="User" /></div>
                        <div className="contentBx">
                            <h3 className='font-white'>Kuldeep Verma<br /><span>Machine Learning</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li style={{ '--i': 1 }}>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                        </li>
                        <li style={{ '--i': 2 }}>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                        </li>
                        <li style={{ '--i': 3 }}>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="card card-1">
                    <div className="content">
                        <div className="imgBx"><img src={props.img} alt="User" /></div>
                        <div className="contentBx">
                            <h3>Krishna Vasuniya<br /><span>UI/UX designer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li style={{ '--i': 1 }}>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                        </li>
                        <li style={{ '--i': 2 }}>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                        </li>
                        <li style={{ '--i': 3 }}>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="card card-1">
                    <div className="content">
                        <div className="imgBx"><img src={props.img} alt="User" /></div>
                        <div className="contentBx">
                            <h3>Manish Bachhane<br /><span>Backend Developer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li style={{ '--i': 1 }}>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                        </li>
                        <li style={{ '--i': 2 }}>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                        </li>
                        <li style={{ '--i': 3 }}>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                {/* Repeat the structure for other team members */}
            </div>
        </section>
    </div>
  )
}

export default Team
