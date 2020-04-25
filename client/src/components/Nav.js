import React from "react";
import {Link} from "react-router-dom";

function Nav (){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><h1>Google Books</h1></Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Search<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/saved">Saved Books</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Nav;