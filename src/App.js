import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useEffect,useState} from "react";
import API from './utils/API'

import Navbar from "./components/Navbar";
import Header from "./components/Header/";
import Main from "./pages/Main";

import "./App.css";

function App() {
  const [userId, setUserId] = useState(0)
  const [userEmail, setUserEmail] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState("")

  
  return (
    <div className="app">
      <Router basename="/connect-ed">
        <div className="pageContainer">
          <div className="header">
            <Header />
          </div>
          <body>
            <div className="nav">
              <Navbar />
            </div>

            <div className="main">
              <Main />
            </div>
          </body>
          <h1>Footer</h1>
        </div>
      </Router>
    </div>
  );
}

export default App;
