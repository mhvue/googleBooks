import axios from "axios"; //we will be using axios for googlebooks and our db

const key="AIzaSyBqJPwVVWSuyX3s_ZdJorHskPEAMfmgwGg";
const queryURL= "https://www.googleapis.com/books/v1/volumes?api_key=" + key +"&q="; 


export default {
    //get all books. passing in bookInfo which will be entered by user
    getBooks: function(bookInfo) {
        return axios.get(queryURL + bookInfo)
    },    

    //save a book to our mongodb 
    saveBooks: function(bookInfo) {
        return axios.get("/api/savebook", bookInfo)
    },

    //view all saved books in db 
    viewSaved: function(){
        return axios.get("/api/allbooks")
    }
} 



