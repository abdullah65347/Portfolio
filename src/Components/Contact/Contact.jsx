import React, { useRef, useState } from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'

const Contact = ({ setShowLogin }) => {
    const [showPopup, setShowPopup] = useState(false);
    const formRef = useRef(null);
    const closePopup = () => {
        setShowPopup(false);
    };
    const toggleForm = () => {
        setShowLogin(false);
        document.body.style.overflow = 'auto';

    };
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');

    const handleNameChange = (event) => {
        const fullName = event.target.value;
        const firstName = fullName.split(' ')[0]; // Extract the first name
        setName(fullName);
        setSubject(`${firstName} sent a message from Portfolio`);
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
        <div className="contact-popup">
            <form onSubmit={onSubmit} ref={formRef} className="contact-popup-container">
                <div className="contact-popup-title" >
                    <h2>Let's Connect!!</h2>
                    <img onClick={() => toggleForm()} src={assets.cross_icon} alt="" />
                </div>
                <div className="contact-popup-inputs">
                    <input type="text" placeholder="Name" name="name" value={name} onChange={handleNameChange} required />
                    <input type="hidden" name="subject" value={subject} />
                    <input type="email" placeholder="Email" name="email" required />
                    <textarea placeholder="Enter your message here..." name="message"></textarea>
                    <button type='submit'>Submit</button>
                </div>

            </form>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Message Sent Successfully!</h2>
                        <button onClick={() => { closePopup(); setShowLogin(false); }}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Contact