import React from 'react'
import './../styles.scss';
import NavBar from "./../components/navBar/NavBar";

const MainLayOut = ({ children }) => {
    return (
        <div className="app layout">
            <NavBar />
            <main>
                <header className="page-title">
                    <h1>Products</h1>
                </header>
                {children}
            </main>
        </div>
    )
}

export default MainLayOut