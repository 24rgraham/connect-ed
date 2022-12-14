import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import ProjectCard from "../../ProjectCard";

import "./style.css";

export default function OgProjects(props) {
    const [ogProjects,setOgProjects] = useState([])
    
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
         API.getOgProjects(storedToken).then((data) => {
               console.log(data);
               setOgProjects(data)
           });
    },[] 
    )

    return(
        <>
            {ogProjects && <div className='ogProj'>
                <h6>My Original Projects:</h6>
                <div className='statusCards'>

                {ogProjects.map((projectInfo) => (<ProjectCard key={projectInfo.id} projectInfo={projectInfo}/>))}
                </div>
            </div>}
            </>
    )
}
