import React, { Component } from "react";

import "./components.scss";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      count: "",
      price: "",
      promotionalPrice: "",
    };
  }

  handleInputChange = (event) => {
    return this.setState(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="centered">
        <h2>Add new product</h2>
        <div>
          <label className="label" htmlFor="">Product name</label>
          <input name="product" type="text" value={ this.state.product } onChange={this.handleInputChange}/>
          <label className="label" htmlFor="">Items count</label>
          <input name="count" type="text" value={ this.state.count } onChange={this.handleInputChange}/>
          <label className="label" htmlFor="">Price</label>
          <input name="price" type="text" value={ this.state.price } onChange={this.handleInputChange}/>
          <label className="label" htmlFor="">Promotional Price</label>
          <input name="promotionalPrice" type="text" value={ this.state.promotionalPrice } onChange={this.handleInputChange}/>
          <input className="button" type="submit" value="Aceptar" />
        </div>
      </div>
    );
  }
}

export default ProductForm;
