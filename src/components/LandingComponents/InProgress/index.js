import React, { useEffect, useState } from 'react'
import API from '../../../utils/API';
import ProjectCard from '../../ProjectCard';

export default function InProgress(props) {
    const [inProgressProjects,setInProgressProjects] = useState([])
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        API.getCompletedProjects(storedToken).then((data) => {
              console.log(data);
              setCompletedProjects(data)
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
                <h4>In Progress Projects:</h4>
                {inProgressProjects.map((projectInfo) => (<ProjectCard key={projectInfo.Project.id} projectInfo={projectInfo.Project}/>))}
            </div>}
            </>
    )
}