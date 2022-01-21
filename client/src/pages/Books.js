import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron.js";
import BookCard from "../components/BookCard.js";
import Form from "../components/Form.js";
import API from "../utils/API.js"; 
import "./style.css";

class Books extends Component {
    state = {
        books: [],
        author: "",
        title: ""
    };


    //handleInputChange (input info to search for a book)
    handleInputChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        });
    };

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
        .then(res => alert("info added"))
          
        .catch(err => console.log(err))
    };

    //onsubmit 
    handleFormSubmit = event => {
        event.preventDefault();
         API.getBooks(this.state.title +  this.state.author)
            .then(res => this.setState({
                books: res.data.items
            }))
            .catch(err => console.log(err))

    //need to put validation on here 
        if(this.state.title.length && this.state.author.length){
            this.setState({
                title: "",
                author:""
            })
        }
    };

    render(){
        return(
            <div>
                <Jumbotron />
                <div className="form-container">
                <Form> <h3 id="startMsg">Enter Title or Author to start</h3>
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
    
                </Form>   
                </div>

                <div>
                <h1 className="resultHead">Results</h1>
                {this.state.books.length ? (
                  <div className="bookInfo-container">
                     {this.state.books.map(book => {
                        const bookData = book.volumeInfo
                      // if(bookData.imageLinks.smallThumbnail)
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
                    <h3 className="nothingMsg">Nothing to display</h3>
                )}
                 </div>
            </div>
        )
    }
}

export default Books;