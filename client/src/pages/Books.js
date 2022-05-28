import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron.js";
import BookCard from "../components/BookCard.js";
import Form from "../components/Form.js";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import API from "../utils/API.js"; 
import "./style.css";

class Books extends Component {
    state = {
        books: [],
        author: "",
        title: "",
        isOpen: false
    };

    //modal
    showModal = () => {
        this.setState({
            isOpen: true
        })
    };

    hideModal = () => {
        this.setState({
            isOpen: false,
        })
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
        .then(res => this.showModal())
          
        .catch(err => console.log(err))
    };

    //onsubmit 
    handleFormSubmit = event => {
        event.preventDefault();
        const inputAuthor = this.state.author;
        const inputTitle = this.state.title;

        //Author only 
        if(inputTitle.length === 0 && inputAuthor.length > 1){
            API.getBooks(inputTitle + "+inauthor:"+ inputAuthor)
            .then(res => this.setState({
                books: res.data.items
            }))
            .catch(err => console.log(err))
        }
        //Author and Title 
        else if(inputTitle.length > 0 && inputAuthor.length > 1){
            API.getBooks(inputTitle + "+inauthor:"+ inputAuthor)
            .then(res => this.setState({
                books: res.data.items
            }))
            .catch(err => console.log(err))
        }
         //Title only
        else if(inputTitle.length > 0 && inputAuthor.length === 0){
            API.getBooks(inputTitle)
            .then(res => this.setState({
                books: res.data.items
            }))
            .catch(err => console.log(err))
        }

        //clear form
        this.setState({
            title: "",
            author:""
        });


    };

    handleClearSearchResults = event => {
        event.preventDefault();

        if(this.state.books.length === 0){
            alert("No search results to delete.")
        }

        this.setState({
            books: []
        })
    };

    render(){
        return(
            <div>
                <Modal show={this.state.isOpen} onHide="true">
                    <Modal.Header>Saved!</Modal.Header>
                    <Modal.Body>Successfully Saved.</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary cancelBtn"
                           onClick={this.hideModal}>
                               Cancel
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Jumbotron />
                <div className="form-container">
                <Form> <h3 id="startMsg">Enter Title and/or Author</h3>
                <form className="form-group">
                        <p>Title:</p>
                            <input 
                            value={this.state.title}
                            name="title"
                            onChange={this.handleInputChange}
                            type="text"
                        />
                        <p>Author:</p>
                        <input
                            value={this.state.author}
                            name="author"
                            onChange={this.handleInputChange}
                            type="text"
                        />
                          <Button 
                            variant="primary submitBtn" 
                            className="submitBtn"   
                            onClick={this.handleFormSubmit}>
                            Submit
                         </Button>
                          <Button  
                            variant="info clearBtn"
                            onClick={this.handleClearSearchResults}>
                            Clear Search Results
                          </Button>
                     </form> 
    
                </Form>   
                </div>

                <div>
                <h1 className="resultHead">Results</h1>
                {this.state.books.length > 0 ? (
                  <div className="bookInfo-container">
                     {this.state.books.map(book => {
                        const bookData = book.volumeInfo
                        // console.log(bookData.imageLinks === undefined)
                      if(bookData.imageLinks === undefined){
                        return(
                            <BookCard 
                               key={book.id}
                               title={bookData.title}
                               authors={bookData.authors}
                               description={bookData.description}
                               link={bookData.infoLink}
                               image={<h2>Sorry no image</h2>} 
                               button={<Button variant="outline-primary saveBtn"
                                        onClick={() => this.handleSave(book.id)}>
                                        Click to save "{bookData.title}"
                                      </Button>} 
                           />
                           );
                      }
                        return(
                         <BookCard 
                            key={book.id}
                            title={bookData.title}
                            authors={bookData.authors}
                            description={bookData.description}
                            link={bookData.infoLink}
                            image={bookData.imageLinks.smallThumbnail} 
                            button={<Button variant="outline-primary saveBtn"
                                    onClick={() => this.handleSave(book.id)}>
                                    Click to save "{bookData.title}"
                                   </Button>} 
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