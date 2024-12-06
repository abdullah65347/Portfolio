import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = ({ showLogin, setShowLogin }) => {
    const [menu, setMenu] = useState("Header");

    const toggleForm = () => {
        setShowLogin(!showLogin);
        document.body.style.overflow = 'hidden';
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'auto' });  // Instant jump
            setMenu(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));  // Update active menu
        }
    };

    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <a href="/"><img src={assets.logo} alt="" /></a>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-list">
                    <li>
                        <a
                            onClick={() => scrollToSection("header")}
                            className={menu === "Header" ? "active" : ""}
                            href="#header"
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => scrollToSection("about")}
                            className={menu === "About" ? "active" : ""}
                            href="#about"
                        >
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => scrollToSection("skills")}
                            className={menu === "Skills" ? "active" : ""}
                            href="#skills"
                        >
                            SKILLS
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => scrollToSection("projects")}
                            className={menu === "Projects" ? "active" : ""}
                            href="#projects"
                        >
                            PROJECTS
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-contact">
                <img onClick={toggleForm} src={assets.contact} alt="" />
            </div>
        </div>
    );
};

export default Navbar;
