import React from "react";
import './index.css';
import { Link } from "react-router-dom";
import templeLogo from '../../../Assets/images/temple-logo.svg';

const NonAuthenticatedNavbar = () => {
    return (
        <div className="Navbar">
            <div>
                <Link to="/">
                    <img src={templeLogo} alt="logo" style={{width: "4.5rem",}} />
                </Link>
            </div>
            <div style={{display: "flex", gap:"1rem"}}>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/about">About Us</Link>
                </div>
                <div>
                    <Link to="/product">Product</Link>
                </div>
                <div>
                    <Link to="/service">Service</Link>
                </div>
                <div>
                    <Link to="/review">Review</Link>
                </div>
                <div>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
                <div>
                    <Link to="/account-details">Account Details</Link>
                </div>
                {/* <div>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
                <div>
                    <Link to="/sign-in">Sign In</Link>
                </div> */}
            </div>
        </div>
    );
};

export default NonAuthenticatedNavbar;