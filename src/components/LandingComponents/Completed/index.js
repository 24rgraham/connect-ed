import React, { useEffect, useState } from 'react'
import API from '../../../utils/API';
import ProjectCard from '../../ProjectCard';

export default function Completed(props) {
    const [completedProjects,setCompletedProjects] = useState([])
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
        API.getCompletedProjects(storedToken).then((data) => {
            //   console.log(data[0].Project);
              setCompletedProjects(data)
          });
    },[] )
    return(
        <>
            {completedProjects && <div className='completed'>
                <h4>Completed Projects:</h4>
                {completedProjects.map((projectInfo) => (<ProjectCard key={projectInfo.Project.id} projectInfo={projectInfo.Project}/>))}
            </div>}
            </>
    )
}