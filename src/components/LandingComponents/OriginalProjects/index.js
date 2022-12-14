import React, { useEffect, useState } from 'react'
import API from '../../../utils/API';
import ProjectCard from '../../ProjectCard';

export default function OgProjects(props) {
    const [ogProjects,setOgProjects] = useState([])
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
        API.getOgProjects(storedToken).then((data) => {
              console.log(data);
              setOgProjects(data)
          });
    },[] )
    return(
        <>
            {ogProjects[0] && <div className='myProjects'>
                <h4>MY Projects:</h4>
                {ogProjects.map((projectInfo) => (<ProjectCard key={projectInfo.id} projectInfo={projectInfo}/>))}
            </div>}
            </>
    )
}