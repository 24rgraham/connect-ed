import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";

import Subject from "../../components/SingleProjectComponents/Subject";
import SubjectSearch from "../../components/SearchComponents/SubjectSearch";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import "./style.css";

import Image from "react-bootstrap/Image";
const storedToken = localStorage.getItem("token");


export default function SingleProject(props) {
  const params = useParams();
  const [star, setStar] = useState(false);

  const [project, setProject] = useState([]);

  useEffect(() => {
    API.getProject(params.id).then((data) => {
      setProject(data);
    });
  }, []);

  function starProject() {
    setStar(true);
    const starredItem = {
      starred: true,
    };
    API.changeStatus(params.id, starredItem, storedToken).then((data) => {
      console.log(data);
    })
  }
  
  function unstarProject() {
    setStar(false);
    const starredItem = {
      starred: false,
    };
    API.changeStatus(params.id, starredItem, storedToken).then((data) => {
      console.log(data);
    })
  }

  return (
    <>
      <button onClick={starProject}>Star</button>
      <button onClick={unstarProject}>unStar</button>

      {project && (
        <div className="projectContainer">
          <div className="topOfPage">
            <header>
              <h3 className="title"> {project.title}</h3>
            </header>

            <div className="topTwo">
              <div className="mediaContainer">
                <Image
                  className="projImg"
                  style={{ width: "25rem" }}
                  src={project.image}
                ></Image>
              </div>

              <div className="topRight" scrolling="auto">
                <Card style={{ height: "16.75rem" }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      
                        <p className="grade">
                          <div className="gradeGrid">
                          <label className="contLabel">
                            Recommended Grade:
                            
                          </label>
                          <label className="answers">{project.grade_lvl}</label>
                          </div>
                          
                        </p>
                      
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p className="time">
                        <div className="gradeGrid">
                        <label className="contLabel">
                          Estimated Time to Complete:
                        </label>
                        <label className="answers">{project.est_time}</label>
                        </div>
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {project.Curriculums && (
                        <p>
                          <div className="gradeGrid">
                          <label className="contLabel">Curriculum Style:</label>
                          <label className="answers">
                            {" "}
                            {project.Curriculums.map((curriculum) => (
                              <span>{curriculum.name}</span>
                            ))}
                          </label>
                          </div>
                        </p>
                      )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {project.Subjects && (
                        <p>
                          <div className="gradeGrid">
                        <label className="contLabel">Subjects:</label>
                        <label className="answers">  {project.Subjects.map((subject) => (
                            <span>{subject.name}</span>
                          ))}</label>
                          </div>
                        </p>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </div>
          </div>

          <div className="midPage">
            <Card>
              {" "}
              Overview:
              <p>{project.overview_desc}</p>
            </Card>
          </div>

          <div className="bottomOfPage">
            <div className="btmLeft">
              <Card style={{ height: "24rem" }}>
                <div className="directionsContainer" scrolling="auto">
                  <p>{project.directions}</p>
                </div>
              </Card>
            </div>

            <div className="btmRightTxt">
              <div className="materialsContainer">
                <p>{project.materials}</p>
              </div>
              <div className="resourcesContainer">
                <p>{project.resources}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
