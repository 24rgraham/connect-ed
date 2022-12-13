import React, { useState, useEffect } from 'react';
import './style.css'

import { useNavigate } from "react-router-dom";
import API from "../../utils/API"
// const [project, setProject] = useState([

// ])

// useEffect(() => {
//       setProject(props.currentProject)
//   }, [props.userId]);
//   console.log(project);
//

export default function ProjectCard(props){

   
    const navigate = useNavigate();

    const navigateProject = () => {
        navigate(`/project/${props.projectInfo.id}`);
    }
    
    // useEffect(() => {
    //     API.getProject(props.projectId).then((data) => {
    //     setCard(data);
    //     });
    //   }, [props.userId]);
    //   console.log(project);
  

    return(
        <>
         <div className='cardContainer'>
       
        <button onClick={navigateProject} >
            <div className='imageContainer'>
                <img width='100px' src={require('../../utils/pelican.png')}></img>
                
            </div>
            <div className='cardTitle'>{card.title}</div>
                <div className='gradeCard'>Grade Level:{card.grade_lvl}</div>
                <div className='timeCard'>Time Description:{card.est_time}</div>
                
         
        </button>
       </div>
       

        </>
    )

}

// import {data} from ...Completed.apply.API
// {data.map(project => (
//     <Project key={project.id} project={project}/>
// ))}