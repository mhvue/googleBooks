const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, "Book Title Required"]
    },
    authors:  [{
        type: String, 
        required: [true, "Author is Required"]
    }],
    description:{
        type: String
    },
    image: {
        type: String
    },
    link:{
        type: String
    }
});

const Books = mongoose.model("Books",BookSchema);

module.exports = Books;