//only going to display saved books, the only thing gone is the search form

import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron.js";
import {BookCard}  from "../components/BookCard.js";
// import LayoutCard from "../components/LayoutCard.js";
import API from "../utils/API";


class SavedBooks extends Component {

    // state = {
    //     savedBooks:[]
       
    // }

    // ComponentDidMount() { 
    //     this.viewAllSaved();
    // }

    // viewAllSaved = () => {
    //     API.viewSaved()
    //     .then(res => this.setState({savedBooks: res.data})
    //     )
    //     .catch(err => console.log(err))
    // }

    // handleDelete = (id)=> {
    //     API.deleteBook(id)
    //     .then(res => this.viewAllSaved)
    //     .catch(err => console.log(err))
    // }


    render() {
    return (
        <div>
            <Jumbotron />
            <h1>Saved Books</h1>
            {/* <LayoutCard /> */}
            <BookCard />
            <button>Delete</button>
        </div>
    )

    }
}

export default SavedBooks;