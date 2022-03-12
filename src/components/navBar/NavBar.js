import React from 'react'
import { ReactComponent as TnLogo } from './../../img/tn.svg';
import { NavLink } from "react-router-dom";
import "./../../styles.scss"

const NavBar = () => {
    return (
        <aside>
            <header> <TnLogo className="svg" /> </header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active" exact>Product List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default NavBar