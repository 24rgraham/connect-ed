import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Subject from '../../components/SingleProjectComponents/Subject'
import SubjectSearch from "../../components/SearchComponents/SubjectSearch";

export default function SingleProject(props) {

    const [project, setProject] = useState([

    ])

  useEffect(() => {
    API.getProject(1).then((data) => {
      console.log(data);
      setProject(data)
    });
  }, [props.userId]);

  console.log("props:" + project);
  return (
    <>
   {project && <div className="projectContainer">
      <div className="topOfPage">
        <h3 className="title"> {project.title}</h3>
        <div className="mediaContainer">
          <img></img>
          <p className="grade">Recommended Grade Level: {project.grade_lvl}</p>
          <p className="time">Estimated Time to Complete: {project.est_time}</p>
         
          {/* <p className="subject">Subject(s): {project.Subjects.map(subject => (
      `${subject.subjectTag.name}, `))}
    </p> */}
    {/* <p>{project.Subjects[0]}</p> */}
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
