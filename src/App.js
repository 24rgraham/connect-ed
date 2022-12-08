import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import React from 'react';
import Signup from './pages/Signup/index.js';
import Header from './components/Header/'
import Main from './pages/Main'
import './App.css'

function App() {
  return (
    <div className="app">
         
        <Router basename="/connect-ed">
          <div className="pageContainer">
            <div className="header">
              <Header/>
            </div>
            <body>
              <div className="nav">
                <Navbar/>
              </div>
              
              <div className="main">
                <Main/>
              </div>
            </body>
             <h1>Footer</h1>
          </div>
        </Router>
    </div>
  );
}

export default App;