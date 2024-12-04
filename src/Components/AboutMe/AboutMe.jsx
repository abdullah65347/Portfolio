import React from 'react'
import './AboutMe.css'
import { assets } from '../../assets/assets'

const AboutMe = () => {
    return (
        <div className="aboutMe-container" id="about">
            <h1>MORE ABOUT ME</h1>
            <div className="aboutMe-content">
                <div className="aboutMe-upper-section">
                    <div className="aboutMe-upper-section-left">
                        <div className="left-img">
                            <img src={assets.profilepic} alt="" />
                        </div>
                    </div>
                    <div className="aboutMe-upper-section-right">
                        <h2>Who I Am?</h2>
                        <div className="aboutMe-intro">
                            <p>I’m Abdullah Farooqi, a <b> Java Full Stack Developer</b> with a strong foundation in software development and fullStack development. My technical journey began with a B.Tech in Computer Science Engineering from Lovely Professional University(LPU), during which I developed a keen interest in creating robust and user-friendly applications.</p>
                            <p>I specialize in both frontend and backend development, bringing a balanced approach to crafting seamless and scalable solutions. With a focus on continuous learning and improvement, I strive to stay ahead in this rapidly evolving industry.</p>
                        </div>
                    </div>
                </div>
                <div className="aboutMe-lower-section">
                    <h1>What I Do?</h1>
                    <div className="aboutMe-lower-subsections">
                        <div className="skillContainer" id="frontend">
                            <h2>Frontend Development</h2>
                            <p>Creating responsive, user-friendly interfaces that deliver a seamless experience across devices. Focus on design, interactivity, and optimizing performance.</p>
                            <ul>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Redux</li>
                            </ul>
                        </div>
                        <div className="skillContainer" id="backend">
                            <h2>Backend Development</h2>
                            <p>Building secure, scalable backend systems that handle application logic, manage data, and develop efficient APIs for smooth server-client communication.</p>
                            <ul>
                                <li>Java</li>
                                <li>Spring Boot</li>
                                <li>MySQL</li>
                                <li>Spring Security, JWT</li>

                            </ul>
                        </div>
                        <div className="skillContainer" id="fullStack">
                            <h2>Full Stack Development</h2>
                            <p>Integrating both frontend and backend technologies to deliver complete solutions, ensuring all layers of an application work together seamlessly.</p>
                            <ul>
                                <li>Java Spring Boot</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>MySQL</li>
                                <li>Spring Security, JWT</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe