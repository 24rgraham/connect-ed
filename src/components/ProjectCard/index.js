import React, { useState, useEffect } from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";
import API from "../../utils/API";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function ProjectCard({ projectInfo }) {
  // console.log(projectInfo);
  const navigate = useNavigate();
  const navigateProject = () => {
    navigate(`/project/${projectInfo.id}`);
  };
  const times = ["30 min or less","30-60 min","1-2 hours","Half a Day","1 Day","2 Days","3 Days","4 Days","1 Week","2 Weeks","3 Weeks","1 Month"]
  return (
    <div className="card" style={{ width: "15rem", margin: "2rem" }} onClick={navigateProject}>
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img height="300px" src={projectInfo.image} style={{ maxHeight:"160px", width:"250px" }} className="img-fluid" />
        
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        
      </div>
      <div className="card-body" id="card-body">
        <h5 className="card-title">{projectInfo.title}</h5>
        <p className="card-text">Grade Level: {projectInfo.grade_lvl}</p>
        <p className="card-text">Estimated Time: {times[projectInfo.est_time]}</p>
        {/* <a href="#!" className="btn btn-primary">Button</a> */}
      </div>
    </div>

    // <Card className="hover-shadow" style={{ width: "15rem", padding: "2rem", margin:"2rem", }}>
    //   <Card.Img variant="top" src={projectInfo.image} />
    //   <Card.Body>
    //     <Card.Title>{projectInfo.title}</Card.Title>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item>Grade Level: {projectInfo.grade_lvl}</ListGroup.Item>
    //     <ListGroup.Item>Estimated Time: {projectInfo.est_time}</ListGroup.Item>
    //   </ListGroup>
    // </Card>

    // <>

    //     <div className="projectCardDiv">
    //     <div className='cardContainer'>

    //         <button onClick={navigateProject} >

    //         <Card  style={{ width: '11rem', height: '14rem' }}>
    //             <div className='imageContainer'>
    //                 <img width='177px' src={projectInfo.image}></img>
    //             </div>
    //             <div className='cardTitle'>{projectInfo.title}</div>
    //         <div className='gradeCard'>Grade Level: {projectInfo.grade_lvl}</div>
    //         <div className='timeCard'>Estimated Time: {projectInfo.est_time}</div>

    //         </Card>

    //         </button>
    //     </div>

    // </>
  );
}

// import {data} from ...Completed.apply.API
// {data.map(project => (
//     <Project key={project.id} project={project}/>
// ))}
