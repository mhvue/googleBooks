//only going to display saved books, the only thing gone is the search form

import React from "react";
import Jumbotron from "../components/Jumbotron.js";
import {BookCard}  from "../components/BookCard.js";


function SavedBooks () {
    return (
        <div>
            <Jumbotron />
            <BookCard />
            <button>Delete</button>
        </div>
    )
}

export default SavedBooks;