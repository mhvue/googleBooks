import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron.js";
import {BookCard} from "../components/BookCard.js";
import LayoutCard from "../components/LayoutCard.js";
import Form from "../components/Form.js";
import API from "../utils/API.js"; //this api will connect with our backend and googlebook (poss?)

class Books extends Component {
    state = {
        books: [],
        title:"",
        author: "",
        image: "",
        description: "",
        link: ""

    }

    // componentDidMount() {
    //     this.handleFormSubmit();
    // }


    //handleInputChange (input info to searching for a book)
    handleInputChange = event => {
        const {name, value} = event.target
        // console.log(name, value)
        this.setState({
            [name]: value
        });
    }

    //handleSave (saved a  book to our db)
    handleSave = event => {
        // console.log(event.title)
        // console.log(event.author, event.image, event.description, event.link)
        
        // const bookData = event;
         API.saveBooks({
            title: event.title,
            author: event.authors,
            image: event.image,
            description: event.description,
            link: event.link
        })
        .then(res => console.log(res))
        // .then(res => this.loadSaved())
        .catch(err => console.log(err))
    }

    //onsubmit 
    handleFormSubmit = event => {
        event.preventDefault();
            // API.getBooks(this.state.title)
            // .then(res => console.log(res.data.items))
            // .catch(err => console.log(err))
        if(this.state.title || this.state.author) {
        API.getBooks(this.state.title && this.state.author)
            .then(res => this.setState({
                books: res.data.items
            }))
            .catch(err => console.log(err))
        }
        //need to put validation on here 
    }
    render(){
        return(
            <div>
                <Jumbotron />
                <Form>
                    <form className="form text-center">
                        <input 
                            value={this.state.title}
                            name="title"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Title"
                        />
                        <input
                            value={this.state.author}
                            name="author"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Author"
                        />
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </Form>
                <div><h1>Results</h1>
                {this.state.books.length ? (
                    <div>

                     {this.state.books.map(book => {
    
                        return(
                         <BookCard 
                            // id= {book.id}
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            image={book.volumeInfo.imageLinks.smallThumbnail} 
                            onClick={this.handleSave}
                            // button={() => (
                            // <button
                            // // onClick={this.handleSave}
                            // >
                            //     Save
                            // </button>)}
                        />
                        
                        );
                    })} 
                    </div>) : (
                    <h3>Nothing to display</h3>
                )}
                 </div>
            </div>
        )
    }
}

export default Books;