import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Navbarbootstrap from "./components/Navbarbootstrap";
import React from "react";
import Headerbootstrap from "./components/Headerbootstrap/";
// import Header from "./components/Header/";
import Main from "./pages/Main";
import "./App.css";

function App() {
  return (
    <div>
      <Router basename="/connect-ed">
        <Headerbootstrap />
        <Main />
      </Router>
    </div>
  );
}

export default App;
