import React, { useState, useEffect } from 'react';
import './style.css'

import { useNavigate } from "react-router-dom";
import API from "../../utils/API"
// const [project, setProject] = useState([

// ])




export default function ProjectCard({projectInfo}) {
    console.log(projectInfo);
    const navigate = useNavigate();
    const navigateProject = () => {
        navigate(`/project/${projectInfo.id}`);
    }

    return (
        <>
            <div className='cardContainer'>

                <button onClick={navigateProject} >
                    <div className='imageContainer'>
                        <img width='178px' src={projectInfo.image}></img>
                    </div>
                    <div className='cardTitle'>{projectInfo.title}</div>
                <div className='gradeCard'>Grade Level: {projectInfo.grade_lvl}</div>
                <div className='timeCard'>Time Description: {projectInfo.est_time}</div>


                </button>
            </div>


        </>
    )

}

// import {data} from ...Completed.apply.API
// {data.map(project => (
//     <Project key={project.id} project={project}/>
// ))}