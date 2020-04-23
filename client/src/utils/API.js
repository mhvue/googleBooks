import axios from "axios";

const key="AIzaSyBqJPwVVWSuyX3s_ZdJorHskPEAMfmgwGg";
const queryURL= "https://www.googleapis.com/books/v1/volumes?api_key" + key +"q="; 


export default {
    //get all books. passing in booktitle which will be entered by user
    getBooks: function(bookTitle) {
        return axios.get(queryURL + bookTitle)
    }

    //view a book which will bring user to Google Books, which will be based on that specific id 
    

    //save a book to our mongodb 
} 



