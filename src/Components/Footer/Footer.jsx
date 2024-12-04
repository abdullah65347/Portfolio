import React, { useState, useRef } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);
    const formRef = useRef(null);
    const closePopup = () => {
        setShowPopup(false);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "9ff39eb1-6241-4b6f-90e8-609a856d9833");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setShowPopup(true);
            if (formRef.current) {
                formRef.current.reset();
            }
        }
    };

    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-heading">
                    <h1>
                        Get in Touch
                    </h1>
                </div>
                <div className="footer-content-left">
                    <div className="footer-intro">
                        <img src={assets.logo} alt="" />
                        <h1>Abdullah Farooqi</h1>
                    </div>
                    <p className='footer-desc'>Every project is a chance to push boundaries and create something truly extraordinary. By combining creativity with technical expertise, I deliver innovative, user-centric solutions. Let’s collaborate to transform your vision into something remarkable.</p>
                    <p className='footer-quote'>"The only way to do great work is to love what you do."</p>
                    <div className="footer-social-icons">
                        <a href="https://github.com/abdullah65347" target="_blank">
                            <img src={assets.github_logo} alt="" />
                        </a>
                        <a href='https://www.linkedin.com/in/abdullah65347/' target="_blank">
                            <img src={assets.linkedin_logo} alt="" />
                        </a>
                        <a href='https://www.instagram.com/_abdullah_farooqi/' target="_blank">
                            <img src={assets.instagram_logo} alt="" />
                        </a>
                        <a href='https://x.com/Abdullah65347' target="_blank">
                            <img src={assets.twitter_logo} alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer-content-right">
                    <div className="form-heading">
                        <h2>Let's Connect!</h2>
                    </div>
                    <form onSubmit={onSubmit} className="contact-form" ref={formRef}>
                        <input type="text" placeholder="Name" name='name' required />
                        <input type="email" placeholder="Email" name='email' required />
                        <textarea placeholder='Enter your message here...' name='message'></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                &copy; 2024 Abdullah Farooqi. All rights reserved.
            </p>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Message Sent Successfully!</h2>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Footer;
