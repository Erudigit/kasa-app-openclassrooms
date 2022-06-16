import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
    return (
        <div class="no-page">
            <h1 id="404">404</h1>
            <p>Oops! It looks like this page doesn't exist.</p>

            <Link to="/">Go back to home page</Link>
        </div>
    );
}

export default NoPage;