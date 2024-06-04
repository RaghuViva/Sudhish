import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import SingUp from "../../Pages/SignUp";
import SingIn from "../../Pages/SingIn";
import AccountDetails from "../../Pages/AccountDetails.tsx";
import Product from "../../Pages/Product";
import ContactUs from "../../Pages/ContactUs";
import About from "../../Pages/About";
import Service from "../../Pages/Service";
import Review from "../../Pages/Review";

const AuthenticationRoutes = () => {
    const routes = [
        { path: "/", element: <HomePage/> },
        { path: "/about", element: <About/> },
        { path: "/product", element: <Product/> },
        { path: "/service", element: <Service/> },
        { path: "/review", element: <Review/> },
        { path: "/contact-us", element: <ContactUs/> },
        // { path: "/sign-up", element: <SingUp/> },
        // { path: "/sign-in", element: <SingIn/> },
        { path: "/account-details", element: <AccountDetails/> },
        { path: "*", element: <HomePage/> },
    ];

    return useRoutes(routes);
};

export default AuthenticationRoutes;