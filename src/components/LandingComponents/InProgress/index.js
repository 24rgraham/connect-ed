import React, { useEffect, useState } from 'react'
import API from '../../../utils/API';
import ProjectCard from '../../ProjectCard';

export default function InProgress(props) {
    const [inProgressProjects,setInProgressProjects] = useState([])
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
        API.getInProgressProjects(storedToken).then((data) => {
            //   console.log(data[0].Project);
              setInProgressProjects(data)
          });
    },[] )
    return(
        <>
            {inProgressProjects && <div className='inProgress'>
                <h4>In Progress Projects:</h4>
                {inProgressProjects.map((projectInfo) => (<ProjectCard key={projectInfo.Project.id} projectInfo={projectInfo.Project}/>))}
            </div>}
            </>
    )
}