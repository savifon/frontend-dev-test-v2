import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, [loading]);

    const login = (email, password) => {
        if (email === "admin@example.com" && password === "102030@") {
            const loggedUser = JSON.stringify({
                id: 1,
                email: email,
                name: "Admin",
            });

            localStorage.setItem("user", loggedUser);
            setUser(loggedUser);

            navigate("/");
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("images");
        setUser(null);

        navigate("/login");
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <AuthContext.Provider
            value={{ authenticathed: !!user, user, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };
