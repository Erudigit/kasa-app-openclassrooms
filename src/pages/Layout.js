import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";


function Layout() {

    var oldActivePage = document.querySelector('.active-link')
    if (oldActivePage) {
        oldActivePage.classList.remove("active-link");
    }

    return (
    <div className="App">
        <header className="App-header">
            <Navbar />
        </header>
            <Outlet />
            <Footer />
    </div>
    );
}

export default Layout;