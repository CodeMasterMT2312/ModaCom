import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './stilos/contactos.css';

const Contact = () => {
    return (
        <div>
            <Header />
            <Nav />
            <body>
                <div className="contact-container">
                    <h1>Contáctanos</h1>
                    <div className="social-links">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-button facebook">Facebook</a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-button instagram">Instagram</a>
                        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="social-button telegram">Telegram</a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-button twitter">X/Twitter</a>
                        <a href="https://wa.me/tuNumeroWhatsApp" target="_blank" rel="noopener noreferrer" className="social-button whatsapp">WhatsApp</a>
                    </div>
                    <div className="email">
                        <p>Correo Electrónico: <a href="mailto:modacom@gmail.com">modacom@gmail.com</a></p>
                    </div>
                </div>
            </body>
            <Footer />
        </div>
    );
};

export default Contact;
