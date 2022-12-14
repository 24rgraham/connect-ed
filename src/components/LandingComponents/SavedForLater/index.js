import React, { useEffect, useState } from 'react'
import API from '../../../utils/API';
import ProjectCard from '../../ProjectCard';

import './style.css'

export default function SavedForLater(props) {
    const [savedForLaterProjects,setSavedForLaterProjects] = useState([])
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
        API.getSavedForLaterProjects(storedToken).then((data) => {
            //   console.log(data[0].Project);
              setSavedForLaterProjects(data)
          });
    },[] )
    return(
        <>
            {savedForLaterProjects[0] && <div className='savedForLater'>
                <h6 className='headerForLater'>Saved For Later Projects:</h6>
                <div className='statusCards'>
                    {savedForLaterProjects.map((projectInfo) => (<ProjectCard key={projectInfo.Project.id} projectInfo={projectInfo.Project}/>))}
                </div>
            </div>}
            </>
    )
}