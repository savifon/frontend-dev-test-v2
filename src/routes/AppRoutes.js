import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import ImageGallery from "../pages/ImageGallery";

const AppRoutes = () => {
    const Private = ({children}) => {
        const
    }
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<ImageGallery />} />
            </Routes>
        </Router>
    );
};
