import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Subject from '../../components/SingleProjectComponents/Subject'
import SubjectSearch from "../../components/SearchComponents/SubjectSearch";

export default function SingleProject(props) {

  const [project, setProject] = useState([])

  useEffect(() => {
    API.getProject(props.projectId).then((data) => {
      setProject(data)
    });
  }, [props.userId]);
  console.log(project);

  return (
    <>
      {project && <div className="projectContainer">
        <div className="topOfPage">
          <h3 className="title"> {project.title}</h3>
          <div className="mediaContainer">
            <img></img>
            <p className="grade">Recommended Grade Level: {project.grade_lvl}</p>
            <p className="time">Estimated Time to Complete: {project.est_time}</p>
            {project.Curriculums && <p className="subject">Curriculum(s): {project.Curriculums.map(curriculum => (
              <span>{curriculum.name}</span>))}
            </p>}
           {project.Subjects && <p className="subject">Subject(s): {project.Subjects.map(subject => (
              <span>{subject.name}</span>))}
            </p>}
          </div>
        </div>
        <div className="midPage">
          <div className="overviewContainer">
            <div className="overview"> Overview: {project.overview_desc}
              <p></p>
            </div>
          </div>
        </div>
        <div className="bottomOfPage">
          <div className="directionsContainer">
            <p>{project.directions}</p>
          </div>
          <div className="materialsContainer">
            <p>{project.materials}</p>
          </div>
          <div className="resourcesContainer">
            <p>{project.resources}</p>
          </div>
        </div>
      </div>}
    </>
  );
}