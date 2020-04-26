import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron.js";
import {BookCard}  from "../components/BookCard.js";
// import LayoutCard from "../components/LayoutCard.js";
import API from "../utils/API";


class SavedBooks extends Component {

    state = {
        savedBooks:[]
       
    }

    componentDidMount() { 
        this.viewAllSaved();
    }

    viewAllSaved = () => {
        API.viewSaved()
        .then(res =>this.setState({savedBooks: res.data})
        )
        .then(res =>console.log(res.data))
        .catch(err => console.log(err))
    }


    handleDelete = (id)=> {
        // console.log(id)
        API.deleteBook(id)
        .then(res => this.viewAllSaved())
        .catch(err => console.log(err))
    }


    render() {
    return (
        <div>
            <Jumbotron />
            <h1>Saved Books</h1>
            {/* <LayoutCard /> */}
            {this.state.savedBooks.map(saved => {
                return (
                    <BookCard 
                        id={saved._id}
                        title={saved.title}
                        authors={saved.authors}
                        image={saved.image}
                        description={saved.description}
                        link={saved.link}
                        button={<button onClick={() => this.handleDelete(saved._id)}>
                                Delete
                                </button>} 
                    />
                 )
            })}
           
        </div>
    )

    }
}

export default SavedBooks;