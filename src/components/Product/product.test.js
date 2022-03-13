import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Product from "./Product";

const data = { name: "T-shirt", count: 3, price: 20, promotionalPrice: 15 };


describe("Render Product", () => {
  beforeEach(() =>
    render(
      <Product
        name={data.name}
        count={data.count}
        price={data.price}
        promotionalPrice={data.promotionalPrice}
      />
    )
  );

  it("Render Name", () => {
    expect(screen.getByText(data.name)).toBeInTheDocument();
  });
  it("Render Count", () => {
    expect(screen.getByText(data.count.toString())).toBeInTheDocument();
  });
  it("Render Price", () => {
    expect(screen.getByText(data.price.toString())).toBeInTheDocument();
  });
  it("Render Promotional Price", () => {
    expect(
      screen.getByText(data.promotionalPrice.toString())
    ).toBeInTheDocument();
  });
  it("Render edit button", () => {
    const editButton = screen.getByText(/editar/i)
    expect(editButton).toBeInTheDocument();
  });
  it("Render Delete button", () => {
    const deleteButton = screen.getByText(/eliminar/i)
    expect(deleteButton).toBeInTheDocument();
  });
  it("Open modal after edit button is clicked", async () => {
    const editButton = screen.getByText(/editar/i)
    fireEvent.click(editButton);
    const modal = screen.getByText(/Editar producto/i);
    expect(modal).toBeInTheDocument();
  });
});
