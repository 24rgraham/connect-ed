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
    <div className="App">
      <Router>
      <Headerbootstrap />
      <Routes>
        <Route path="/connect-ed/*" element={<Main />}></Route>
      </Routes>
      </Router>

    </div>
    // <div className="app">
    //   <Router basename="/connect-ed">
    //     <div className="pageContainer">
    //       <div className="header">
    //         {/* <Header /> */}
    //       </div>
    //         <div className="nav">
    //           <Navbarbootstrap />
    //         </div>
    //       <div className="body">
    //         <div className="main">
    //           <Main />
    //         </div>
    //       </div>
    //       <h1>Footer</h1>
    //     </div>
    //   </Router>
    // </div>
  );
}

export default App;
