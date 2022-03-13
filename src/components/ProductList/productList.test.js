import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductList from "./ProductList";


describe("Render ProductList component", () => {
    beforeEach(() =>
        render(
            <ProductList />
        )
    );

    it("Render ProductList", () => {
        const component = screen.getByText(/^Product list$/i)
        expect(component).toBeInTheDocument();
    });
    it("Render product of header-list", () => {
        const product = screen.getByText(/^Product$/i)
        expect(product).toBeInTheDocument();
    });
    it("Render count of header-list", () => {
        const count = screen.getByText(/^Count$/i)
        expect(count).toBeInTheDocument();
    });
    it("Render price of header-list", () => {
        const price = screen.getByText(/^Price$/i)
        expect(price).toBeInTheDocument();
    });
    it("Render promotional price of header-list", () => {
        const promotionalPrice = screen.getByText(/^Promotional Price$/i)
        expect(promotionalPrice).toBeInTheDocument();
    });
    it("Render buttons of header-list", () => {
        const buttons = screen.getAllByText(/^#$/i)
        expect(buttons).toHaveLength(2);
    });
});
