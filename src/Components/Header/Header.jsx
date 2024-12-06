import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = ({ showLogin, setShowLogin }) => {
    const toggleForm = () => {
        setShowLogin(!showLogin);
        document.body.style.overflow = 'hidden';
    }
    return (<>
        <div className="header-container" id='header'>
            <div className="header-left">
                <div className="header-intro">
                    <h1>Hi, I'm<br /> Abdullah Farooqi</h1>
                    <div className="p">
                        <p> A passionate <span>Java Full Stack Developer</span> with a strong foundation in frontend and backend development. </p>
                    </div>
                </div>
                <div className="header-intro-buttons">
                    <a href='https://drive.google.com/drive/folders/1Q6MOT2njJLqL8ioqMQU5bGia32bYsJzv?usp=sharing' target="_blank"  >
                        <button>Download Resume
                            <img src={assets.download_icon} alt="Error404" />
                        </button></a>
                    <button onClick={toggleForm} className="contact-me">Contact Me
                        <img src={assets.up_right_arrow} alt="Error404" />
                    </button>
                </div>
            </div>
            <div className="header-right">
                <div className="header-right-img-border">
                    <img src={assets.profile} alt="" />
                </div>
            </div>
        </div>
    </>
    )
}

export default Header