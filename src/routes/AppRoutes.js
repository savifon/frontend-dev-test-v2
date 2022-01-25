import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import ImageGallery from "../pages/ImageGallery";

import { AuthProvider, AuthContext } from "../context/AuthContext";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticathed, loading } = useContext(AuthContext);

        if (loading) {
            return <div>Carregando...</div>;
        }

        if (!authenticathed) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Private>
                                <ImageGallery />
                            </Private>
                        }
                    />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;
