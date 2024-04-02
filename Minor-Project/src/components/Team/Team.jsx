import React from 'react'
import "./Team.css";


function Team() {
  return (
    <div>
       <section>
            <h2>Team</h2>
            <div className="container">
                <div className="card card-1">
                    <div className="content">
                        <div className="imgBx"><img src="#" alt="User" /></div>
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
                        <div className="imgBx"><img src="images/user.jpg" alt="User" /></div>
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
                        <div className="imgBx"><img src="images/user.jpg" alt="User" /></div>
                        <div className="contentBx">
                            <h3>Name<br /><span>Position</span></h3>
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
                        <div className="imgBx"><img src="images/user.jpg" alt="User" /></div>
                        <div className="contentBx">
                            <h3>Name<br /><span>Position</span></h3>
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
