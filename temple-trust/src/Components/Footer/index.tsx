import React from "react";
import './index.css';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div>
                <p className="footer-title" style={{fontWeight: "600", fontStyle:"italic", }}>Rudhrabhumi Trust</p>
            </div>
            <div>
                <p>Contact us : +91 8095244525</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;