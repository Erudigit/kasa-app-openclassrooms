import React from "react";
import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";



function Layout() {
    return (
    <div className="App">
        <header className="App-header">
            <Navbar />
            <Outlet />
        </header>
    </div>
    );
}

export default Layout;