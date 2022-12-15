import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";

// will need to import the cloudinary widget
import "./style.css";

export default function EditProject({ token }) {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "connect_ed");
    data.append("cloud_name", "dqv6cj4bc");
    fetch("https://api.cloudinary.com/v1_1/dqv6cj4bc/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const handleProjectCreate = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newProject = {
      title: data.get("newTitle"),
      image: `${url}`,
      grade_lvl: data.get("newGradeLevel"),
      est_time: data.get("newEstTime"),
      overview_desc: data.get("newDesc"),
      directions: data.get("newDirections"),
      materials: data.get("newMaterials"),
      // resources: data.get("newResources"),
      subjects: data.get("newSubjects"),
      curriculums: data.get("newCurriculums"),
    };

    console.log(newProject);

    API.createProject(newProject, token)
      .then((res) => {
        console.log("res:" + res);
        navigate("/projects");
      })
      .catch((err) => {
        alert("Project creation failed");
        console.log(err);
      });
  };

  return (
    <Form className="new-project-form" onSubmit={handleProjectCreate}>
      <Row className="mb-3">
        <Col sm={4} className="my-1">
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              name="newTitle"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="my-1">
          <Form.Group>
            <Form.Label>Project Image</Form.Label>
            <div>
              <input
                type="file"
                name="file"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={uploadImage}
              >
                Upload Image
              </button>
              <div>
                <img src={url} />
              </div>
            </div>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs="auto">
          <Form.Group className="mb-3">
            <Form.Label>Grade Level</Form.Label>
            <Form.Select
              className="mb-3"
              defaultValue="Choose..."
              name="newGradeLevel"
            >
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
            <div>
              <Badge pill bg="subject">
                {/* eventual badges for selected subjects */}
              </Badge>{" "}
            </div>

            <Form.Label>Subjects</Form.Label>
            <Form.Select defaultValue="Choose..." name="newSubjects">
              <option value="">Choose...</option>
              <option value={1}>Art</option>
              <option value={2}>Math</option>
              <option value={3}>History</option>
              <option value={4}>SEL</option>
              <option value={5}>Woodworking</option>
              <option value={6}>Anthropologie</option>
              <option value={7}>Science</option>
              <option value={8}>English</option>
              <option value={9}>Writing</option>
              <option value={10}>Spanish</option>
              <option value={11}>French</option>
              <option value={12}>Outdoor</option>
              <option value={13}>Physical Education</option>
              <option value={14}>Cultural Holidays</option>
              <option value={15}>Culture</option>
            </Form.Select>
            <div>
              <Badge pill bg="curriculum">
                {/* eventual badges for selected curriculums */}
              </Badge>{" "}
            </div>

            <Form.Label>Curriculum</Form.Label>
            <Form.Select defaultValue="Choose..." name="newCurriculums">
              <option value="">Choose...</option>
              <option value={1}>Montessori</option>
              <option value={2}>Waldorf</option>
              <option value={3}>Standard</option>
              <option value={4}>PBL</option>
              <option value={5}>Reggio Emilia</option>
              <option value={6}>B.E.E.T.L.E.S (Outdoor Ed.) </option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Col sm={2}>
        <Form.Group className="mb-3">
          <Form.Label>Time to Complete</Form.Label>
          <Form.Select defaultValue="Choose..." name="newEstTime">
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
        <Form.Group className="mb-3">
          <Form.Label>Overview/Description</Form.Label>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="Write a brief summary of your project here"
            name="newDesc"
          />
        </Form.Group>
      </Col>
      <Col lg={12}>
        <Form.Group className="mb-3">
          <Form.Label>Directions</Form.Label>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="Please include a detailed, step-by-step guide of your project/assignment with time breakdown, and expectations"
            name="newDirections"
          />
        </Form.Group>
      </Col>
      <Col lg={12}>
        <Form.Group className="mb-3">
          <Form.Label>Materials</Form.Label>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="Please list needed materials (with quantity per child) separated by a comma."
            name="newMaterials"
          />
        </Form.Group>
      </Col>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}