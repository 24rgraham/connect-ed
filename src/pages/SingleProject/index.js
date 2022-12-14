import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";

import Subject from "../../components/SingleProjectComponents/Subject";
import SubjectSearch from "../../components/SearchComponents/SubjectSearch";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import "./style.css";

import Image from "react-bootstrap/Image";

export default function SingleProject(props) {
  const params = useParams();
  const [star, setStar] = useState(false);

  const [project, setProject] = useState([]);

  useEffect(() => {
    API.getProject(params.id).then((data) => {
      setProject(data);
    });
  }, []);
  console.log(project);

  function starredProject() {
    setStar(true);

    const starredItem = {
      starred: star,
    };
    API.createStarredProjects(starredItem, props.token);
    //call the api
    //send back project id, userId
    //need to grab token
  }

  return (
    <>
      {/* <button onClick={starredProject}>Star</button> */}
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
                            <label className="contLabel">
                              Curriculum Style:
                            </label>
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
                            <label className="answers">
                              {" "}
                              {project.Subjects.map((subject) => (
                                <span>{subject.name}</span>
                              ))}
                            </label>
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
              <p className="midText">
                <label className="answers">Overview:</label>
                <label className="contLabel">{project.overview_desc}</label>
              </p>
            </Card>
          </div>

          <div className="bottomOfPage">
            <div className="btmLeft">
              <Card style={{ height: "24rem" }}>
                <div className="directionsContainer" scrolling="auto">
                  <label className="answers">
                    Step-by-Step Instructions (with timeline breakdown):
                  </label>
                  <p>{project.directions}</p>
                </div>
              </Card>
            </div>

            <div className="btmRightTxt">
              <Card style={{ height: "24rem" }}>
                <div className="bottomRightContent">
                <div className="materialsContainer">
                <p>
                <label class>Materials</label>
                  <p>{project.materials}</p>
              
                  </p>
                </div>
                <div className="resourcesContainer">
                  <label className="answers">Additional Resources:</label>
                  <p>{project.resources}</p>
                </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
