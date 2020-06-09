import axios from "axios"; //we will be using axios for googlebooks and our db

const key="AIzaSyBqJPwVVWSuyX3s_ZdJorHskPEAMfmgwGg";
const queryURL= "https://www.googleapis.com/books/v1/volumes?api_key=" + key +"&q="; 
//const queryURL= "https://www.googleapis.com/books/v1/volumes?q=";



export default {
    //get all books. passing in bookInfo which will be entered by user
    getBooks: function(bookInfo) {
        console.log(bookInfo)
        return axios.get(queryURL + bookInfo)
    },    

    //save a book to our mongodb 
    saveBooks: function(bookInfo) {
        return axios.post("/api/savebook", bookInfo)
    },

    //view all saved books in db 
    viewSaved: function(){
        return axios.get("/api/allbooks")
    },

    //delete a book
    deleteBook: function (bookId) {
        return axios.delete("/api/deletebook/" + bookId)
    }
} 



