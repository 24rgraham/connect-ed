import React, { useState, useEffect } from 'react';
import './style.css'
import { Link } from 'react-router-dom'

export default function ProjectCard(){
  

    return(
        <>
   <div className='cardContainer'>
        <Link to="/project/:id">
        
            <div className='imageContainer'>
                <img width='100px' src={require('../../utils/pelican.png')}></img>
                
            </div>
            <div className='cardTitle'>Title</div>
                <div className='gradeCard'>Grade Level</div>
                <div className='timeCard'>Time Description</div>
                
        
        </Link>
       </div>
        </>
    )
}

// import {data} from ...Completed.apply.API
// {data.map(project => (
//     <Project key={project.id} project={project}/>
// ))}