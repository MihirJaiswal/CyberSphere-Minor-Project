import React from 'react';
import "./Team.css";

function Team({ images }) {

    const { img, img1, img2, img3 } = images;

    const teamMembers = [
        { name: 'Mihir Jaiswal', photo: img, role: 'Frontend and Integration' },
        { name: 'Kuldeep Verma', photo: img1, role: 'Machine Learning' },
        { name: 'Krishna Vasuniya', photo: img2, role: 'UI/UX Designer' },
        { name: 'Manish Bachhane', photo: img3, role: 'Backend Developer' }
    ];


    return (
        <div>
            <section className='mt-12'>
                <h2 className='text-center text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-main'>Meet Our Team</h2>
                <div className="container flex flex-col md:flex-row flex-wrap justify-center items-center mx-auto mt-10 md:mt-12">
                    {teamMembers.map((member, index) => (
                        <div key={index}>
                            <div className="card card-1 ">
                                <div className="content">
                                    <div className="imgBx"><img src={member.photo} alt="User" /></div>
                                    <div className="contentBx">
                                        <h3>{member.name}<br /><span>{member.role}</span></h3>
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
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Team;
