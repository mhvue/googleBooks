import React from "react";
import Nav from "./components/Nav";
// import Books from "./pages/Books";
import BookCard from "./components/BookCard";
import Form from "./components/Form";
import Jumbotron from "./components/Jumbotron";
// import Saved from "./pages/Saved";
// import './App.css';
//eventually routers will go here as well so need to move Jumbotron, Form , Bookcard

function App() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      {/* <Books /> */}
      <Form />
      < BookCard />
       {/* might move BookCard this later  */}
      {/* <Saved /> */}
    </div>
  );
}

export default App;
