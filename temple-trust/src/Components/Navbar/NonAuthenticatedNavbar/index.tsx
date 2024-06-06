import React from "react";
import './index.css';
import { Link } from "react-router-dom";
import templeLogo from '../../../Assets/images/temple-logo.svg';
import menuIcon from '../../../Assets/images/bars-svgrepo-com.svg';
import DrawerCmp from "../../DrawerCmp/index";

const NonAuthenticatedNavbar = () => {
    return (
        <div className="Navbar">
            <div>
                <Link to="/">
                    <img src={templeLogo} alt="logo" style={{width: "4.5rem",}} />
                </Link>
            </div>
            <DrawerCmp>
                <div className="Nav-container-2" style={{display: "flex", gap:"1rem"}}>         
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/about">About Us</Link>
                    </div>
                    <div>
                        <Link to="/product">Project</Link>
                    </div>
                    <div>
                        <Link to="/contact-us">Contact Us</Link>
                    </div>
                    <div>
                        <Link to="/account-details">Account Details</Link>
                    </div>
                </div>
            </DrawerCmp>
        </div>
    );
};

export default NonAuthenticatedNavbar;