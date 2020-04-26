import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron.js";
import BookCard from "../components/BookCard.js";
import Form from "../components/Form.js";
import API from "../utils/API.js"; 
import "./style.css";

class Books extends Component {
    state = {
        books: []

    }

    //handleInputChange (input info to searching for a book)
    handleInputChange = event => {
        const {name, value} = event.target
        // console.log(name, value)
        this.setState({
            [name]: value
        });
    }

    //handleSave (saved a  book to our db)
    handleSave = id => {
        // console.log(id)
        const selectBook = this.state.books.find(book => book.id === id)
        const selectBookData = selectBook.volumeInfo

         API.saveBooks({
            title: selectBookData.title,
            authors: selectBookData.authors,
            image: selectBookData.imageLinks.smallThumbnail,
            description: selectBookData.description,
            link: selectBookData.infoLink
        })
        .then(res => console.log(res))
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
                    <div className="form-group">
                    <form className="form-group">
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
                        <button className="submitBtn"
                        onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                    </div>
                </Form>   
                
                <div>
                <h1 className="resultHead">Results</h1>
                {this.state.books.length ? (
                    
                  <div className="bookInfo-container">
                     {this.state.books.map(book => {
                        const bookData = book.volumeInfo
                        return(
                         <BookCard 
                            key={book.id}
                            title={bookData.title}
                            authors={bookData.authors}
                            description={bookData.description}
                            link={bookData.infoLink}
                            image={bookData.imageLinks.smallThumbnail} 
                            button={<button className="saveBtn"
                                    onClick={() => this.handleSave(book.id)}>
                                    Click to save "{bookData.title}"
                                   </button>} 
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