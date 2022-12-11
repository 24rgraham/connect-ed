import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import React from 'react';
import Signupbootstrap from '../Signupbootstrap';
import Login from '../Login';
import SingleProject from '../../components/SingleProject'
import Landing from '../Landing'
import NewProject from "../NewProject";
import Search from "../Search"
import SearchResults from "../SearchResults"

import './style.css'

function Main() {
    return(
        <main className='mainContainer container'>
            <Routes>
            
                <Route path="/" element={<Signupbootstrap/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/project" element={<SingleProject/>}/>
                <Route path="/mypage" element={<Landing/>}/>
                <Route path="/create" element={<NewProject/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/results" element={<SearchResults/>}/>
            
              </Routes>
        </main>
    )
}

export default Main;