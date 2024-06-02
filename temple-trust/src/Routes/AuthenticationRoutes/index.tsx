import React from "react";
import HomePage from "../../Pages/HomePage";
import SingUp from "../../Pages/SignUp";
import SingIn from "../../Pages/SingIn";
import { useRoutes } from "react-router-dom";

const AuthenticationRoutes = () => {
    const routes = [
        { path: "/", element: <HomePage/> },
        { path: "/sign-up", element: <SingUp/> },
        { path: "/sign-in", element: <SingIn/> },
        { path: "*", element: <HomePage/> },
    ];

    return useRoutes(routes);
};

export default AuthenticationRoutes;