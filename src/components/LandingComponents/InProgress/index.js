import React, { useEffect, useState } from 'react'
import API from '../../../utils/API';
import ProjectCard from '../../ProjectCard';

import './style.css'

export default function InProgress(props) {
    const [inProgressProjects,setInProgressProjects] = useState([])
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        API.getInProgressProjects(storedToken).then((data) => {
            //   console.log(data);
              setInProgressProjects(data)
          });
    },[] )
    //     const fetchData = async () =>{
    //         try{
    //             const storedToken = await localStorage.getItem("token");
    //             const dataToken =   API.getInProgressProjects(storedToken).then((data) => {
    //         //   console.log(data[0].Project);
    //           setInProgressProjects(data)
    //       });
    //         } catch(err){

    //         } fetchData(); 
    //     }     
       
    // },[] )
    return(
        <>
            {inProgressProjects[0] && <div className='inProgress'>
                <h6>In Progress Projects:</h6>
                <div className='statusCards'>
                    {inProgressProjects.map((projectInfo) => (<ProjectCard key={projectInfo.Project.id} projectInfo={projectInfo.Project}/>))}
                </div>
            </div>}
            </>
    )
}