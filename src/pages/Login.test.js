import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Login from "./Login";

describe("Página de login", () => {
    test("deve conter texto de boas vindas", () => {
        render(<Login />);

        const welcomeText = screen.getByText("Seja bem-vindo(a)");
        expect(welcomeText).toBeInTheDocument();
    });

    test("deve conter o input do tipo email", () => {
        render(<Login />);

        const inputEmail = screen.getByRole("textbox", { type: "email" });
        expect(inputEmail).toBeInTheDocument();
    });

    test("deve conter o input do tipo password", () => {
        render(<Login />);

        const inputPassword = screen.getByRole("textbox", { type: "password" });
        expect(inputPassword).toBeInTheDocument();
    });

    test("deve conter o botão de submit", () => {
        render(<Login />);

        const submitButton = screen.getByRole("button", { type: "submit" });
        expect(submitButton).toBeInTheDocument();
    });
});
