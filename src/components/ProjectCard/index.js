import React, { useState, useEffect } from 'react';
import './style.css'

import { useNavigate } from "react-router-dom";
import API from "../../utils/API"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  ListGroup  from 'react-bootstrap/ListGroup';


export default function ProjectCard({projectInfo}) {
    // console.log(projectInfo);
    const navigate = useNavigate();
    const navigateProject = () => {
        navigate(`/project/${projectInfo.id}`);
    }

    return (
        <>
            <div className="projectCardDiv">
            {/* <div className='cardContainer'> */}

                <button onClick={navigateProject} >

                <Card  style={{ width: '11rem', height: '14rem' }}>
                    <div className='imageContainer'>
                        <img width='177px' src={projectInfo.image}></img>
                    </div>
                    <div className='cardTitle'>{projectInfo.title}</div>
                <div className='gradeCard'>Grade Level: {projectInfo.grade_lvl}</div>
                <div className='timeCard'>Estimated Time: {projectInfo.est_time}</div>
                
                </Card>


                </button>
            </div>
         

        </>
    )

}

// import {data} from ...Completed.apply.API
// {data.map(project => (
//     <Project key={project.id} project={project}/>
// ))}