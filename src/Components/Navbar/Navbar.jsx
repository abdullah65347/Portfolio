import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = ({ showLogin, setShowLogin }) => {
    const [menu, setMenu] = useState("Home");

    const toggleForm = () => {
        setShowLogin(!showLogin);
        document.body.style.overflow = 'hidden';
    };

    const handleScroll = () => {
        const sections = [
            { id: "home", offsetTop: 0 },
            { id: "about", offsetTop: document.querySelector("#about")?.offsetTop || 0 },
            { id: "skills", offsetTop: document.querySelector("#skills")?.offsetTop || 0 },
            { id: "projects", offsetTop: document.querySelector("#projects")?.offsetTop || 0 }
        ];

        const scrollPosition = window.scrollY + 50;
        const currentSection = sections.find((section, index) => {
            const nextSection = sections[index + 1];
            return scrollPosition >= section.offsetTop && (!nextSection || scrollPosition < nextSection.offsetTop);
        });

        if (currentSection) {
            setMenu(currentSection.id.charAt(0).toUpperCase() + currentSection.id.slice(1));
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <a href="/"><img src={assets.logo} alt="" /></a>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-list">
                    <li><a onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""} href="#header">HOME</a></li>
                    <li><a onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""} href="#about">ABOUT</a></li>
                    <li><a onClick={() => setMenu("Skills")} className={menu === "Skills" ? "active" : ""} href="#skills">SKILLS</a></li>
                    <li><a onClick={() => setMenu("Projects")} className={menu === "Projects" ? "active" : ""} href="#projects">PROJECTS</a></li>
                </ul>
            </div>
            <div className="navbar-contact">
                <img onClick={toggleForm} src={assets.contact} alt="" />
            </div>
        </div>
    );
};

export default Navbar;
