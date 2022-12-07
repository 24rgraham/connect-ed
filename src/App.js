import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Navbar from "./components/Navbar";
import React from 'react';
import Signup from './pages/Signup.js';

function App() {
  return (
    <div className="app">
        {/* hello
        <Signup/> */}
         
        <Router basename="/connect-ed">
            {/* <Navbar/> */}
                <Routes>
                <Route path="/" element={<Signup/>}/>
         
            </Routes>
             <h1>Footer</h1>
           </Router>
     </div>
  );
}

export default App;