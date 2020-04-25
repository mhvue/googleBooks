import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
// import './App.css';
//eventually routers will go here as well so need to move Jumbotron, Form , Bookcard to appropriate files to render

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Books} />
      <Route exact path="/saved" component={Saved} />
    </div>
    </Router>
  );
}

export default App;
