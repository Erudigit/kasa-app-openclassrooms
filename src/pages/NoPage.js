import React from "react";
import { Link } from "react-router-dom";
import '../styles/NoPage.css' 

function NoPage() {

    var oldActivePage = document.querySelector('.active-link')
    if (oldActivePage) {
        oldActivePage.classList.remove("active-link");
    }

    return (
        <div className="no-page">
            <h1 id="404">404</h1>
            <p>Oops! It looks like this page doesn't exist.</p>

            <Link to="/">Go back to home page</Link>
        </div>
    );
}

export default NoPage;