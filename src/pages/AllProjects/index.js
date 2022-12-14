import React, { useEffect, useState } from 'react'
import API from '../../utils/API';
import './style.css'
import ProjectCard from '../../components/ProjectCard'

export default function AllProjects() {
    const [allProjects, setAllProjects] = useState([])
    useEffect(() => {
        API.getAllProjects().then((data) => {
            for (var i = data.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
            console.log(data);
            setAllProjects(data)
        });
    }, [])
    return (
        <>
            {allProjects[0] && <div className='inProgress'>
                <div className='landingContainer'>
                    <h4>Community Projects:</h4>
                    {allProjects.map((projectInfo) => (<ProjectCard key={projectInfo.id} projectInfo={projectInfo} />))}
                </div>
            </div>}
        </>
    )
}

