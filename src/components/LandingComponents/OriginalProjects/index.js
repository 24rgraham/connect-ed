import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import ProjectCard from "../../ProjectCard";

export default function OgProjects() {
    const [ogProjects,setOgProjects] = useState([])
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      console.log(storedToken)
        API.getOgProjects(storedToken).then((data) => {
              console.log(data);
              setOgProjects(data)
          });
    },[] )
    return(
        <>
            {ogProjects && <div className='inProgress'>
                <h4>My Projects:</h4>
                {ogProjects.map((projectInfo) => (<ProjectCard key={projectInfo.id} projectInfo={projectInfo}/>))}
            </div>}
            </>
    )
}
