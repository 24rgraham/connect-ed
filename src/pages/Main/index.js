import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import React from 'react';
import Signup from '../Signup';
import './style.css'

function Main() {
    return(
        <div className='mainContainer'>
            <Routes>
                <Route path="/" element={<Signup/>}/>
              </Routes>
        </div>
    )
}

export default Main;