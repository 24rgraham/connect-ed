import React, { useEffect, useState } from 'react'
import API from '../../../utils/API';
import ProjectCard from '../../ProjectCard';

export default function Completed(props) {
    const [completedProjects,setCompletedProjects] = useState([])
    const [projectCard, setProjectCard]=useState([])
    const storedToken = localStorage.getItem("token");

    useEffect(() => {
        API.getCompletedProjects('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tAc3BhcnJvdy5jb20iLCJpZCI6MiwiaWF0IjoxNjcwOTA4NjQ1LCJleHAiOjE2NzA5MTU4NDV9.MJV_IABIWRMKvugCtvPimP1Ra0YP37tftxoiMJdGymY').then((data) => {
              console.log("data:" + data);
              setCompletedProjects(data)
          });
        
    },[] )
    return(
        <>
            {completedProjects && <div className='completed'>
                <h4>Completed Projects:</h4>
                <p>{JSON.stringify(completedProjects)}</p>
                {/* {completedProjects.map((canine) => (<ProjectCard key={canine.id} canine={canine}/>))} */}
                <div><ProjectCard/></div>
            </div>}
            </>
    )
}