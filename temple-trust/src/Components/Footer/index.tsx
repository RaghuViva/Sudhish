import React from "react";
import './index.css';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div>
                <p style={{fontSize: "3rem", fontWeight: "600", fontStyle:"italic", }}>Rudhrabhisheka Trust</p>
            </div>
            <div>
                <p>Contact us : +913434343434333</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;