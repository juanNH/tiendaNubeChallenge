import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ModalProduct from "./../modalProduct/ModalProduct";

const data = { name: "T-shirt", count: 3, price: 20, promotionalPrice: 15 };
const handleClose = jest.fn();

describe("Render Product", () => {
    beforeEach(() => {
        render(
            <ModalProduct
                name={data.name}
                count={data.count}
                price={data.price}
                promotionalPrice={data.promotionalPrice}
                closeModal={handleClose}
            />
        )
    }
    );

    it("Render component", () => {
        const component = screen.getByText(/Editar producto/i);
        expect(component).toBeInTheDocument();
    });

    it("Render Name", () => {
        const name = screen.getByDisplayValue(data.name);
        expect(name).toBeInTheDocument();
    });
    it("Render Count", () => {
        const count = screen.getByDisplayValue(data.count.toString());
        expect(count).toBeInTheDocument();
    });
    it("Render Price", () => {
        const price = screen.getByDisplayValue(data.price.toString());
        expect(price).toBeInTheDocument();
    });
    it("Render Promotional Price", () => {
        const promotionalPrice = screen.getByDisplayValue(data.promotionalPrice.toString())
        expect(promotionalPrice).toBeInTheDocument();
    });
    it("Render send button", () => {
        const closeButton = screen.getByDisplayValue(/Aceptar/i)
        expect(closeButton).toBeInTheDocument();
    })
    it("Render close button", () => {
        const closeButton = screen.getByText(/Cerrar/i)
        expect(closeButton).toBeInTheDocument();
    })
     it("Open modal after edit button is clicked", async () => {
        const closeButton = screen.getByText(/Cerrar/i)
        fireEvent.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1)
    }) 
});