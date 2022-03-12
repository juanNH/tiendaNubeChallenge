import React from 'react'
import { Switch, Route } from "react-router-dom";

import ProductForm from './../components/ProductForm';
import ProductList from './../components/ProductList/ProductList';
const IndexRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/products" component={ProductForm} />
            </Switch>
        </>
    )
}

export default IndexRouter