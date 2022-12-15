import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Subject from "../../components/SingleProjectComponents/Subject";
import SubjectSearch from "../../components/SearchComponents/SubjectSearch";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import "./style.css";

import Image from "react-bootstrap/Image";
const storedToken = localStorage.getItem("token");

export default function SingleProject(props) {
  const navigate = useNavigate();
  const params = useParams();
  const [star, setStar] = useState(null);
  const editBtn = document.querySelector("editBtn");
  const [projectOwner, setProjectOwner] = useState(false);

  const [project, setProject] = useState([]);

  useEffect(() => {
    API.getProject(params.id).then((data) => {
      setProject(data);
      if (data.UserId === props.userId) {
        setProjectOwner(true);
      }
    });
  }, []);
console.log(params.id)
  const navigateEditPage = () => {
    navigate(`/edit-project/${params.id}`);
  };

  function starProject() {
    setStar(true);
    const starredItem = {
      starred: true,
    };
    API.changeStatus(params.id, starredItem, storedToken).then((data) => {
      console.log(data);
    });
  }

  function inProgressProject() {
    const status = {
      in_progress: true,
      completed: false,
    };
    API.changeStatus(params.id, status, storedToken).then((data) => {
      console.log(data);
    });
  }

  function completeProject() {
    const starredItem = {
      in_progress: false,
      completed: true,
    };
    API.changeStatus(params.id, starredItem, storedToken).then((data) => {
      console.log(data);
    });
  }
  function saveProject() {
    const starredItem = {
      saved_for_later: true,
    };
    API.changeStatus(params.id, starredItem, storedToken).then((data) => {
      console.log(data);
    });
  }
  function unSaveProject() {
    const starredItem = {
      in_progress: false,
      completed: false,
      starred: false,
      saved_for_later: false,
    };
    API.changeStatus(params.id, starredItem, storedToken).then((data) => {
      console.log(data);
    });
  }

  return (
    <>
      {/* <button onClick={starProject}>Star This Project</button>
      <button onClick={inProgressProject}>Begin This Project</button>
      <button onClick={completeProject}>Move to Completed Projects</button>
      <button onClick={saveProject}>Save This Project For Later</button>
      <button onClick={unSaveProject}>Unsave This Project</button> */}

      {project && (
        <div className="projectContainer">
          <div className="topOfPage">
            <header>
              <h3 className="title"> {project.title}</h3>
              <p className="starBtn">
                <button className="starBtnBtn" onClick={starProject}>
                  Star
                </button>
                <button className="starBtnBtn" onClick={inProgressProject}>
                  Begin This Project
                </button>
                <button className="starBtnBtn" onClick={completeProject}>
                  Move to Completed Projects
                </button>
                <button className="starBtnBtn" onClick={saveProject}>
                  Save This Project For Later
                </button>
                <button className="starBtnBtn" onClick={unSaveProject}>
                  Unsave This Project
                </button>
                {/* <button className="starBtnBtn" onClick={unstarProject}>unStar</button> */}
              </p>
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
                <Card className="topRightCard" style={{ height: "16.75rem" }}>
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
                                <span>{curriculum.name} </span>
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
                                <span>{subject.name}  </span>
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
            <Card className="midPageCard">
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
                  <p className="contLabel">{project.directions}</p>
                </div>
              </Card>
            </div>

            <div className="btmRightTxt">
              <Card style={{ height: "24rem" }}>
                <div className="bottomRightContent">
                  <div className="materialsContainer">
                    <p>
                      <label className="answers">Materials</label>
                      <p className="contLabel">{project.materials}</p>
                    </p>
                  </div>
                  <div className="resourcesContainer">
                    <label className="answers">Additional Resources:</label>
                    <p className="contLabel">{project.resources}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          {projectOwner && (
            <button
            onClick={navigateEditPage}
              type="button"
              className="editBtn"
              class="btn btn-primary btn-rounded"
            >
              Edit
            </button>
          )}
        </div>
      )}
    </>
  );
}
