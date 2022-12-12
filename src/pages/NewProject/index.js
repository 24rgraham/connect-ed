import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import GradeOptions from "../../components/NewProjectComponents/GradeOptions";
import TimeToComplete from "../../components/NewProjectComponents/TimeToComplete";
import CurriculumOptions from "../../components/NewProjectComponents/CurriculumOptions";
import SubjectOptions from "../../components/NewProjectComponents/SubjectOptions";

// will need to import the cloudinary widget
import "./style.css";

export default function NewProject() {
    const navigate = useNavigate();
  // event.preventDefault
  //   const [newProject, setNewProject] = useState("")
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newGradeLevel, setNewGradeLevel] = useState("");
  const [newEstTime, setNewEstTime] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newDirections, setNewDirections] = useState("");
  const [newMaterials, setNewMaterials] = useState("");
  const [newResources, setNewResources] = useState("");
  const [newCurriculums, setNewCurriculums] = useState("");
  const [newSubjects, setNewSubjects] = useState("");
  const [project, setProject] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title: newTitle,
      image: newImage,
      grade_lvl: newGradeLevel,
      est_time: newEstTime,
      overview_desc: newDesc,
      directions: newDirections,
      materials: newMaterials,
      resources: newResources,
      subjects: newSubjects,
      curriculums: newCurriculums,
    };
    setNewTitle("");
    setNewImage("");
    setNewGradeLevel("");
    setNewEstTime("");
    setNewDesc("");
    setNewDirections("");
    setNewMaterials("");
    setNewResources("");
    setNewCurriculums("");
    setNewSubjects("");
    setProject("");

    API.createProject(newProject, props.token).then(
      navigate("/mypage")
    );
  };

  return (
    <form className="newProjectContainer" onSubmit={handleFormSubmit}>
      <div className="topHalf">
        <div className="topLeft">
          <label>
            Project Title:
            <input
              name="newTitle"
              placeholder="new title!"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              type="text"
            ></input>
          </label>
          {/* img upload from cloudinary here */}
        </div>
        <div className="topRight">
          <label>
            Recommended Grade Level:
            <GradeOptions />
          </label>
          <label>
            Time to Completion:
            <TimeToComplete />
          </label>
          <label>
            Subject(s): <SubjectOptions />
          </label>
          <label>
            Curriculum Style:
            <CurriculumOptions />
          </label>
        </div>
        <div className="midPage">
          <label>
            Overview
            <textarea
              name="newDesc"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              type="text"
              placeholder="Write a brief summary of your project here"
            ></textarea>
          </label>
        </div>
        <div className="bottomHalf">
          <div className="bottomLeft">
            <div>
              <label>
                Directions
                <textarea
                  name="newDirections"
                  value={newDirections}
                  onChange={(e) => setNewDirections(e.target.value)}
                  type="text"
                  placeholder="Please include a detailed, step-by-step guide of your project/assignment with time breakdown, and expectations"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="bottomRight">
            <div>
              <label>
                Materials:
                <textarea
                  name="newMaterials"
                  value={newMaterials}
                  onChange={(e) => setNewMaterials(e.target.value)}
                  type="text"
                  placeholder="Please list needed materials (with quantity per child) separated by a comma."
                ></textarea>
              </label>
            </div>
          </div>
          <input type="submit"></input>
        </div>
      </div>
    </form>
  );
}
