import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron.js";
import BookCard from "../components/BookCard.js";
import Modal from "react-bootstrap/Modal";
import API from "../utils/API";
import "./style.css";

class SavedBooks extends Component {
    state = {
        savedBooks:[],
        isOpen: false,
    }

    componentDidMount() { 
        this.viewAllSaved();
    }

    //modal
    showModal = () => {
        this.setState({
            isOpen: true
        })
    };

    hideModal = () => {
        this.setState({
            isOpen: false
        })
    };

    viewAllSaved = () => {
        API.viewSaved()
        .then(res =>this.setState({savedBooks: res.data})
        )
        // .then(res =>console.log(res.data))
        .catch(err => console.log(err))
    }


    handleDelete = (id)=> {
        console.log(id)
        API.deleteBook(id)
        .then(res => 
            this.viewAllSaved(),
            this.showModal()
            )
        .catch(err => console.log(err))
    }


    render() {
    return (
        <div>
            <Modal show={this.state.isOpen} onHide="true">
                <Modal.Header>Deleted Saved</Modal.Header>
                <Modal.Body>Successfully Deleted</Modal.Body>
                <Modal.Footer>
                    <button onClick={this.hideModal}>Cancel</button>
                </Modal.Footer>
            </Modal>
            <Jumbotron />
            <h1 className= "resultHead">Saved Books</h1>
            {this.state.savedBooks.length ? ( 
            <div className="bookInfo-container">
            {this.state.savedBooks.map(saved => {
                return (
                    <BookCard 
                        key={saved._id}
                        id={saved._id}
                        title={saved.title}
                        authors={saved.authors}
                        image={saved.image}
                        description={saved.description}
                        link={saved.link}
                        button={<button className="deleteBtn"
                                onClick={() => this.handleDelete(saved._id)}>
                                Delete "{saved.title}"
                                </button>} 
                    />
                 );
            })}
           </div>) : (
               <h3 className="nothingMsg">Nothing Saved</h3>
           )}
        </div>
        
    )

    }
}

export default SavedBooks;