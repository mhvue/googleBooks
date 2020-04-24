import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron.js";
import BookCard  from "../components/BookCard.js";
import Form from "../components/Form.js";
import API from "../utils/API"; //this api will connect with our backend and googlebook (poss?)
import SaveBtn from "../components/SaveBtn.js";

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

    //display saved books
    loadSaved = () => {
        API.viewSaved()
        .then(res => this.setState({
            books: res.data
        }))
        .catch(error => console.log(error))
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
    handleSave = () => {
        console.log("click")
        // API.saveBooks({
        //     title: this.state.books.title,
        //     author: this.state.books.author,
        //     image: this.state.books.image,
        //     description: this.state.books.description,
        //     link: this.state.books.link
        // })
        // .then(res => this.loadSaved())
        // .catch(err => console.log(err))
    }

    //onsubmit 
    handleFormSubmit = event => {
        event.preventDefault();
            // API.getBooks(this.state.title)
            // .then(res => console.log(res.data.items))
            // .catch(err => console.log(err))
        if(this.state.title || this.state.author) {
        API.getBooks(this.state.title || this.state.author)
            .then(res => this.setState({
                books: res.data.items
            }))
            .catch(err => console.log(err))
        }
        
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
                            key={book.volumeInfo.title}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            // image={book.volumeInfo.imageLinks} //img not working.
                            image={book.volumeInfo.image}
                        />
                     );
                    })} 
                    <BookCard
                    savedMethod={this.handleSave}
                    />

                    </div>) : (
                    <h3>Nothing to display</h3>
                )}
                 </div>

                 {/* <SaveBtn
                        savedMethod={this.handleSave}
                    /> */}
            </div>
        )
    }
}

export default Books;