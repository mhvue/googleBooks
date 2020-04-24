import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron.js";
import BookCard  from "../components/BookCard.js";
import Form from "../components/Form.js";
import API from "../utils/API"; //this api will connect with our backend and googlebook (poss?)

class Books extends Component {

    state = {
        title:"",
        author: ""
    }
    //componentDidMount will call for books search 

    //method here to use of google API and our backend 

    //handleInputChange (input info to searching for a book)
    handleInputChange= event => {
        const {name, value} = event.target
        // console.log(name, value)

        this.setState({
            [name]: value
        });
    }
    
    //handleSave (saved a  book to our db)

    //onsubmit 

    render(){
        return(
            <div>
                <Jumbotron />
                <Form>
                    <form className="form text-center">
                        <input 
                            // value={this.state.title}
                            name="title"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Title"
                        />
                        
                        <input
                            // value={this.state.author}
                            name="Author"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Author"
                        />
                    
                        <button>Submit</button>
                    </form>
                </Form>
                <BookCard />
            </div>
        )
    }
}

export default Books;