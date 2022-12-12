import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export default function SingleProject(props) {

    const [project, setProject] = useState([

    ])

  useEffect(() => {
    API.getProject(1).then((data) => {
      console.log(data);
      setProject(data)
    });
  }, [props.userId]);

  console.log("props:" + props);
  return (
    <>
   {project && <div className="projectContainer">
      <div className="topOfPage">
        <h3 className="title"> {project.title}</h3>
        <div className="mediaContainer">
          <img></img>
        </div>
      </div>
      <div className="midPage">
        <div className="descriptionContainer">
          <div className="description">
            {project.overview_desc}
            <p></p>
          </div>
        </div>
      </div>
      <div className="bottomOfPage">
        <div className="directionsContainer">
          <p>testing</p>
        </div>
        <div className="materialsContainer">
          <p></p>
        </div>
      </div>
    </div>}
    </>
  );
}
