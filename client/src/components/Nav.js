import React from "react";
import {Link} from "react-router-dom";
import "./componentStyle.css"

function Nav (){
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/"><h2>Google Books</h2></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-light" to="/">Search for Books<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/saved">View Saved Books</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Nav;