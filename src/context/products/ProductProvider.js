import React, { useState, useEffect } from "react";

import ProductContext from "./ProductContext";


const ProductProvider = (props) => {

    const initialState = {
        /* products: [
            { name: "T-shirt", count: 3, price: 20, promotionalPrice: 15 },
            { name: "Trousers", count: 5, price: 15, promotionalPrice: 13 },
            { name: "sweater", count: 10, price: 25, promotionalPrice: 15 },
            { name: "Jacket", count: 3, price: 40, promotionalPrice: 30 },
          ] */
        products: JSON.parse(localStorage.getItem('Products')) || [],
    };
    const [state, setState] = useState(initialState);
    const deleteProduct = (name) => {
        setState({ ...state, products: state.products.filter(productItem => productItem.name !== name) })
    };
    const updateProduct = (name, product) => {
        const index = state.products.findIndex(product => product.name === name);
        const list = state.products;
        list[index] = product;
        setState({ ...state, products: list })
    };
    const createProduct = (product) => {
        setState({ ...state, products: [...state.products, product] });
    };
    useEffect(() => {
        localStorage.setItem('Products', JSON.stringify(state.products));
    }, [state])

    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                deleteProduct,
                updateProduct,
                createProduct,
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
