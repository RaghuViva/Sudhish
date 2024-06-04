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
                    <Link to="/account-details">Account Details</Link>
                </div>
                <div>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
                <div>
                    <Link to="/sign-in">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default NonAuthenticatedNavbar;