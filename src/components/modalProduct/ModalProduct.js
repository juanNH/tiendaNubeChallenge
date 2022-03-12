import React, { useContext, useState } from 'react'
import Input from './../input/Input';
import Label from './../label/Label';
import { useHistory } from "react-router-dom";
import ProductContext from "./../../context/products/ProductContext";
import "./ModalProduct.scss";

const ModalProduct = ({ name, count, price, promotionalPrice, closeModal }) => {
    const productContext = useContext(ProductContext);
    const initialState = { name: name, count: count, price: price, promotionalPrice: promotionalPrice }
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
            productContext.updateProduct(name, state)
            setState(initialState)
            history.push('/')
        }
    }
    return (
        <div>
            <button onClick={closeModal}> Cerrar </button>
            <h2>Editar producto</h2>
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
        </div >
    )
}

export default ModalProduct