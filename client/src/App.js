import React from "react";
import Nav from "./components/Nav";
import Books from "./pages/Books";
// import Saved from "./pages/Saved";
// import './App.css';
//eventually routers will go here as well so need to move Jumbotron, Form , Bookcard to appropriate files to render

function App() {
  return (
    <div>
      <Nav />
      <Books />
      {/* <Saved /> */}
    </div>
  );
}

export default App;
