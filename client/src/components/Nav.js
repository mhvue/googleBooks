import React from "react";
import {Link} from "react-router-dom";
import "./componentStyle.css"

function Nav (){
    return (
    <div>

        <nav className="navbar navbar-light nav">
        <div className="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            
                <Link className="navbar-brand" to="/"><h2>Google Books</h2></Link>
                <Link className="nav-link  navSecondary push-right" to="/">Search for Books</Link>
                <Link className="nav-link  navSecondary" to="/saved">View Saved Books</Link>
             
        </div>
        </nav>
    </div>
)};


export default Nav;