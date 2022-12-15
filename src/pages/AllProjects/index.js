import React, { useEffect, useState } from 'react'
import API from '../../utils/API';
import './style.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            {allProjects[0] && 
                <div className='containerForAll'>
                    <header className='communityHeader'>
                    <h5 id="title" className='allProjectsHFive'>Community Projects:</h5>
                    </header>
                    <div className="containerAllProj">

                    
                    {allProjects.map((projectInfo) => (<ProjectCard key={projectInfo.id} projectInfo={projectInfo} />))}
                </div>
                </div>
            }
        </>
    )
}

