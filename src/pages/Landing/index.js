import React from 'react'
import './style.css'

import ProjectCard from '../../components/ProjectCard'

// Make a project card component that will be .map() placed in each associated container
export default function Landing() {
    return(
        <div className='landingContainer'>
            <div className='inProgress'> 
                <h4>In Progress:</h4>
            </div>
            <div className='completed'>
                <h4>Completed Projects:</h4>
                <div><ProjectCard/></div>
            </div>
            <div className='starred'>
                <h4>Starred Projects:</h4>
            </div>
            <div className='saved4Later'>
                <h4>Saved For Later:</h4>
            </div>
            <div className='originalProjects'>
                <h4>Original Projects:</h4>
            </div>
        </div>
    )
}