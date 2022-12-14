import React, { useEffect, useState } from 'react'
import API from '../../../utils/API';
import ProjectCard from '../../ProjectCard';

export default function Starred(props) {
    const [starredProjects,setStarredProjects] = useState([])
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
        API.getStarredProjects(storedToken).then((data) => {
              console.log(data);
              setStarredProjects(data)
          });
    },[] )
    return(
        <>
            {starredProjects[0] && <div className='starred'>
                <h4>Starred Projects:</h4>
                {starredProjects.map((projectInfo) => (<ProjectCard key={projectInfo.Project.id} projectInfo={projectInfo.Project}/>))}
            </div>}
            </>
    )
}