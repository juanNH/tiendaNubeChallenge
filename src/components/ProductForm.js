import React, { useState, useContext } from "react";
import ProductContext from "./../context/products/ProductContext";
import { useHistory } from "react-router-dom";
import Label from "./label/Label";
import Input from "./input/Input";

import "./components.scss";


const ProductForm = () => {

  const productContext = useContext(ProductContext);
  const initialState = { name: "", count: "", price: "", promotionalPrice: "" }
  const [state, setState] = useState(initialState);
  const [localError, setLocalError] = useState({
    isInState: false,
  });
  const history = useHistory();
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value })
    if (localError.isInState) {
      setLocalError({ isInState: false });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productContext.products.some(product => product.name === state.name)) {
      setLocalError({ isInState: true });
    } else {
      productContext.createProduct(state)
      setState(initialState)
      history.push('/')
    }
  }


  return (
    <div className="centered">
      <h2>Add new product</h2>
      <form>
        <Label text={"Product name"} />
        <Input name={"name"} type="text" value={state.name} action={handleInputChange} />
        <Label text={"Items count"} />
        <Input name={"count"} type="number" value={state.count} action={handleInputChange} />
        <Label text={"Price"} />
        <Input name={"price"} type="number" value={state.price} action={handleInputChange} />
        <Label text={"Promotional Price"} />
        <Input name={"promotionalPrice"} type="number" value={state.promotionalPrice} action={handleInputChange} />


        {localError.isInState &&
          <label className="label-error">El producto ya esta en la lista</label>
        }

        <input className="button" type="submit" value="Aceptar" onClick={(e) => handleSubmit(e)} />

      </form>
    </div>
  );

}

export default ProductForm;
