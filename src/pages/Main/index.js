import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import React from 'react';
import Signup from '../Signup';
import SingleProject from '../../components/SingleProject'
import Landing from '../Landing'
import ProjectCard from "../../components/ProjectCard";
import './style.css'

function Main() {
    return(
        <div className='mainContainer'>
            <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/project" element={<SingleProject/>}/>
                <Route path="/mypage" element={<Landing/>}/>
              </Routes>
        </div>
    )
}

export default Main;