import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup"
import Row from "react-bootstrap/Row";
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import GradeOptions from "../../components/NewProjectComponents/GradeOptions";
import TimeToComplete from "../../components/NewProjectComponents/TimeToComplete";
import CurriculumOptions from "../../components/NewProjectComponents/CurriculumOptions";
import SubjectOptions from "../../components/NewProjectComponents/SubjectOptions";

// will need to import the cloudinary widget
import "./style.css";

export default function NewProject(event) {
  event.preventDefault;
  const navigate = useNavigate();
  const data = new FormData(event.currentTarget);
  const newProject = {
    title: data.get("newTitle"),
    image: data.get("newImage"),
    grade_lvl: data.get("newGradeLevel"),
    est_time: data.get("newEstTime"),
    overview_desc: data.get("newDesc"),
    directions: data.get("newDirections"),
    materials: data.get("newMaterials"),
    resources: data.get("newResources"),
    subjects: data.get("newSubjects"),
    curriculums: data.get("newCurriculums"),
  };
  API.createProject(newProject).then((res) => {
    console.log("res:" + res);
  });

  return (
    <Form className="new-project-form">
      <Row className="mb-3">
        <Col sm={4} className="my-1">
          <Form.Group controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="my-1">
          <Form.Group  controlId="formFile">
          <Form.Label>Project Image</Form.Label>
          <Form.Control type="file" />
          </Form.Group>
        </Col>
      </Row>
        <Col sm={2}>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Grade Level</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option value="...">Choose...</option>
          <option value={13}>Pre-K</option>
          <option value={0}>K</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
      </Form.Select>
      </Form.Group>
      </Col>
        <Col sm={2}>
      <Form.Group className="mb-3" controlId="formTime">
        <Form.Label>Time to Complete</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option value="...">Choose...</option>
          <option value={0}>30 min or less</option>
          <option value={1}>30-60 min</option>
          <option value={2}>1-2 hours</option>
          <option value={3}>half a day</option>
          <option value={4}>1 day</option>
          <option value={5}>2 days</option>
          <option value={6}>3</option>
          <option value={7}>4</option>
          <option value={8}>1 week</option>
          <option value={9}>2 weeks</option>
          <option value={10}>3 weeks</option>
          <option value={11}>1 month</option>
      </Form.Select>
      </Form.Group>
      </Col>
      <Col lg={12}>
      <Form.Group className="mb-3" controlId="formDescription">
      <Form.Label>Overview/Description</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" />
      </Form.Group>
      </Col>
      <Col lg={12}>
      <Form.Group className="mb-3" controlId="formDirections">
      <Form.Label>Directions</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" />
      </Form.Group>
      </Col>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

  //   const [newProject, setNewProject] = useState("")
  // const [newTitle, setNewTitle] = useState("");
  // const [newImage, setNewImage] = useState("");
  // const [newGradeLevel, setNewGradeLevel] = useState("");
  // const [newEstTime, setNewEstTime] = useState("");
  // const [newDesc, setNewDesc] = useState("");
  // const [newDirections, setNewDirections] = useState("");
  // const [newMaterials, setNewMaterials] = useState("");
  // const [newResources, setNewResources] = useState("");
  // const [newCurriculums, setNewCurriculums] = useState("");
  // const [newSubjects, setNewSubjects] = useState("");
  // const [project, setProject] = useState([]);

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   const newProject = {
  //     title: newTitle,
  //     image: newImage,
  //     grade_lvl: newGradeLevel,
  //     est_time: newEstTime,
  //     overview_desc: newDesc,
  //     directions: newDirections,
  //     materials: newMaterials,
  //     resources: newResources,
  //     subjects: newSubjects,
  //     curriculums: newCurriculums,
  //   };
  //   setNewTitle("");
  //   setNewImage("");
  //   setNewGradeLevel("");
  //   setNewEstTime("");
  //   setNewDesc("");
  //   setNewDirections("");
  //   setNewMaterials("");
  //   setNewResources("");
  //   setNewCurriculums("");
  //   setNewSubjects("");
  //   setProject("");

  //   API.createProject(newProject, props.token).then(
  //     navigate("/mypage")
  //   );
  // };

  // return (
  //   <form className="newProjectContainer" onSubmit={handleFormSubmit}>
  //     <div className="topHalf">
  //       <div className="topLeft">
  //         <label>
  //           Project Title:
  //           <input
  //             name="newTitle"
  //             placeholder="new title!"
  //             value={newTitle}
  //             onChange={(e) => setNewTitle(e.target.value)}
  //             type="text"
  //           ></input>
  //         </label>
  //         {/* img upload from cloudinary here */}
  //       </div>
  //       <div className="topRight">
  //         <label>
  //           Recommended Grade Level:
  //           <GradeOptions />
  //         </label>
  //         <label>
  //           Time to Completion:
  //           <TimeToComplete />
  //         </label>
  //         <label>
  //           Subject(s): <SubjectOptions />
  //         </label>
  //         <label>
  //           Curriculum Style:
  //           <CurriculumOptions />
  //         </label>
  //       </div>
  //       <div className="midPage">
  //         <label>
  //           Overview
  //           <textarea
  //             name="newDesc"
  //             value={newDesc}
  //             onChange={(e) => setNewDesc(e.target.value)}
  //             type="text"
  //             placeholder="Write a brief summary of your project here"
  //           ></textarea>
  //         </label>
  //       </div>
  //       <div className="bottomHalf">
  //         <div className="bottomLeft">
  //           <div>
  //             <label>
  //               Directions
  //               <textarea
  //                 name="newDirections"
  //                 value={newDirections}
  //                 onChange={(e) => setNewDirections(e.target.value)}
  //                 type="text"
  //                 placeholder="Please include a detailed, step-by-step guide of your project/assignment with time breakdown, and expectations"
  //               ></textarea>
  //             </label>
  //           </div>
  //         </div>
  //         <div className="bottomRight">
  //           <div>
  //             <label>
  //               Materials:
  //               <textarea
  //                 name="newMaterials"
  //                 value={newMaterials}
  //                 onChange={(e) => setNewMaterials(e.target.value)}
  //                 type="text"
  //                 placeholder="Please list needed materials (with quantity per child) separated by a comma."
  //               ></textarea>
  //             </label>
  //           </div>
  //         </div>
  //         <input type="submit"></input>
  //       </div>
  //     </div>
  //   </form>
  // );
}
