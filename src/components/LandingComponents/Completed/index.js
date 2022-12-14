import React, { useEffect, useState } from 'react'
import API from '../../../utils/API';
import ProjectCard from '../../ProjectCard';
import './style.css'

export default function Completed(props) {
    const [completedProjects,setCompletedProjects] = useState([])
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
        API.getCompletedProjects(storedToken).then((data) => {
            //   console.log(data);
              setCompletedProjects(data)
          });
    },[] )
    return(
        <>
            {completedProjects[0] && <div className='completed'>
                <h6>Completed Projects:</h6>
                <div className='statusCards'>
                    {completedProjects.map((projectInfo) => (<ProjectCard key={projectInfo.Project.id} projectInfo={projectInfo.Project}/>))}
                </div>
            </div>}
            </>
    )
}