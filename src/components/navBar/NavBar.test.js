import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

import App from "./../../App";


const navBar = () => render(<MemoryRouter><App /></MemoryRouter>);

beforeEach(() => {
    navBar();
});

describe("Render custom NavBar", () => {
    it("Render Navbar object", () => {

        const navText1 = screen.getByRole('link', { name: /^Product List$/i });
        const navText2 = screen.getByRole('link', { name: /^Products$/i });
        expect(navText1).toBeInTheDocument();
        expect(navText2).toBeInTheDocument();
    });
    it("Check if Navbar links have correct href properties", () => {
        const navText1 = screen.getByRole('link', { name: /^Product List$/i });
        const navText2 = screen.getByRole('link', { name: /^Products$/i });
        expect(navText1).toHaveAttribute('href', '/');
        expect(navText2).toHaveAttribute('href', '/products');
    });
});