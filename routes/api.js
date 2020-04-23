const db = require("../models");


module.exports = function (app){

//get ALL the books saved to db
app.get("/api/allbooks", (req, res) => {
    // console.log("getting")
    db.Books.find({})
    .then(db => res.json(db))
    .catch(error =>console.log(error))
});

//get ONE book  saved to db 
app.get("/api/book/:id", (req, res) =>{
    // console.log("getting one only")
    const bookOne = req.params._id

    db.Books.findOne({"id":bookOne })
    .then(db =>res.json(db))
    .catch(error => console.log(error))
});

//saving ONE book to the db 
app.post("/api/savebook", (req, res)=>{
    // console.log("postingggg")

    db.Books.create(req.body)
    .then(db => res.json(db))
    .catch(error => console.log(error))
});

//delete one book from the db 
app.delete("/api/deletebook/:id", (req, res) => {
    // console.log("deletinggggggg")
    const bookDelete = req.params._id
    db.Books.deleteOne({"id": bookDelete})
    .then(db => res.json(db))
    .catch(error => console.log(error))
});
}