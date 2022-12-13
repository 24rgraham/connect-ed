import React, { useEffect, useState } from 'react'
import API from '../../../utils/API';
import ProjectCard from '../../ProjectCard';

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
            {savedForLaterProjects[0] && <div className='inProgress'>
                <h4>Saved For Later Projects:</h4>
                {savedForLaterProjects.map((projectInfo) => (<ProjectCard key={projectInfo.Project.id} projectInfo={projectInfo.Project}/>))}
            </div>}
            </>
    )
}