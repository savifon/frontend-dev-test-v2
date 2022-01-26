import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "./Login";
import { AuthContext } from "../context/AuthContext";

function renderLogin() {
    const user = null;
    const loading = () => {};
    const login = () => {};
    const logout = () => {};

    return render(
        <AuthContext.Provider
            value={{ authenticathed: !!user, user, loading, login, logout }}
        >
            <Login />
        </AuthContext.Provider>
    );
}

describe("Página de login", () => {
    test("deve conter texto de boas vindas", () => {
        renderLogin();

        const welcomeText = screen.getByText("Seja bem-vindo(a)");
        expect(welcomeText).toBeInTheDocument();
    });

    test("deve conter o input do tipo email", () => {
        renderLogin();

        const inputEmail = screen.getByRole("textbox", { type: "email" });
        expect(inputEmail).toBeInTheDocument();
    });

    test("deve conter o input do tipo password", () => {
        renderLogin();

        const inputPassword = screen.getByRole("textbox", { type: "password" });
        expect(inputPassword).toBeInTheDocument();
    });

    test("deve conter o botão de submit", () => {
        renderLogin();

        const submitButton = screen.getByRole("button", { type: "submit" });
        expect(submitButton).toBeInTheDocument();
    });
});
