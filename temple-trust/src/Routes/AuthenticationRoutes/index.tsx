import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import SingUp from "../../Pages/SignUp";
import SingIn from "../../Pages/SingIn";
import AccountDetails from "../../Pages/AccountDetails.tsx";

const AuthenticationRoutes = () => {
    const routes = [
        { path: "/", element: <HomePage/> },
        { path: "/sign-up", element: <SingUp/> },
        { path: "/sign-in", element: <SingIn/> },
        { path: "/account-details", element: <AccountDetails/> },
        { path: "*", element: <HomePage/> },
    ];

    return useRoutes(routes);
};

export default AuthenticationRoutes;