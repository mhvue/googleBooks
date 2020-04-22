const express = require("express");
// const path = require("path");
const bodyParser= require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb")

  app.listen(PORT, function(){
      console.log(`API Server now listening on PORT ${PORT}!`)
  })