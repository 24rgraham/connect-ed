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
    <div>
      <Router basename="/connect-ed">
        <Headerbootstrap />
        <Main />
      </Router>
    </div>
  );
}

export default App;
