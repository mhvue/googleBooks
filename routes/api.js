const db = require("../models");


module.exports = function (app){

//get ALL the books saved to db
app.get("/api/allbooks", (req, res) => {
    db.Books.find({})
    .then(db => res.json(db))
    .catch(error =>console.log(error))
});

//saving ONE book to the db 
app.post("/api/savebook", (req, res)=>{
    db.Books.create(req.body)
    .then(db => console.log(res.json(db)))
    .catch(error => console.log(error))
});

//delete one book from the db 
app.delete("/api/deletebook/:id", (req, res) => {
    const bookDelete = req.params.id
    db.Books.deleteOne({"_id": bookDelete})
    .then(db => res.json(db))
    .catch(error => console.log(error))
});
}