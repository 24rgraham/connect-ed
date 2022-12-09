import React from 'react'
import './style.css'

import ProjectCard from '../../components/ProjectCard'
import InProgress from '../../components/LandingComponents/InProgress'
import Completed from '../../components/LandingComponents/Completed'
import Starred from '../../components/LandingComponents/Starred'
import SavedForLater from '../../components/LandingComponents/SavedForLater'
import OriginalProjects from '../../components/LandingComponents/OriginalProjects'

// Make a project card component that will be .map() placed in each associated container
export default function Landing() {
    return(
        <div className='landingContainer'>
            <InProgress/>
            <Completed/>
            <Starred/>
            <SavedForLater/>
            <OriginalProjects/>
        </div>
    )
}

