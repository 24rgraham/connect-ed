import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// will need to import the cloudinary widget
import "./style.css";

export default function EditProject({ token }) {
  const params = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [url, setUrl] = useState("");
  const [project, setProject] = useState([]);


  useEffect(() => {
    API.getProject(params.id).then((data) => {
      setProject(data);
      setUrl(project.image)
      console.log(url)
      
    });
  }, []);

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

  const handleProjectUpdate = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const subjects = []
    if (data.get('Art')) {
      subjects.push('1')
    }
    if (data.get('Maths')) {
      subjects.push('2')
    }
    if (data.get('History')) {
      subjects.push('3')
    }
    if (data.get('SEL')) {
      subjects.push('4')
    }
    if (data.get('Woodworking')) {
      subjects.push('5')
    }
    if (data.get('Anthropologie')) {
      subjects.push('6')
    }
    if (data.get('Science')) {
      subjects.push('7')
    }
    if (data.get('English')) {
      subjects.push('8')
    }
    if (data.get('Writing')) {
      subjects.push('9')
    }
    if (data.get('Spanish')) {
      subjects.push('10')
    }
    if (data.get('French')) {
      subjects.push('11')
    }
    if (data.get('Outdoor')) {
      subjects.push('12')
    }
    if (data.get('Physical Education')) {
      subjects.push('13')
    }
    if (data.get('Culture')) {
      subjects.push('14')
    }
    console.log(subjects);

    const updatedProject = {
      title: data.get("newTitle"),
      image: `${url}`,
      grade_lvl: data.get("newGradeLevel"),
      est_time: data.get("newEstTime"),
      overview_desc: data.get("newDesc"),
      directions: data.get("newDirections"),
      materials: data.get("newMaterials"),
      resources: data.get("newResources"),
      subjects: subjects, 
      curriculums: data.get("newCurriculums"),
    };

    console.log(updatedProject);

    API.editProject(updatedProject, params.id, token)
      .then((res) => {
        console.log("res:" + res);
        navigate(`/project/${params.id}`);
      })
      .catch((err) => {
        alert("Project update failed");
        console.log(err);
      });
  };

  return (
    <Form className="new-project-form" onSubmit={handleProjectUpdate}>
      <Row className="mb-3">
        <Col sm={4} className="my-1">
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              defaultValue={project.title}
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
              defaultValue={project.grade_lvl}
              name="newGradeLevel"
            >
              <option value="...">Choose...</option>
              <option value="Pre-K">Pre-K</option>
              <option value="k">K</option>
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
            {["checkbox"].map((type) => (
                <Row>
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Art"
                      name="Art"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Maths"
                      name="Maths"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="History"
                      name="History"
                      type={type}
                      id={`inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      label="SEL"
                      name="SEL"
                      type={type}
                      id={`inline-${type}-5`}
                    />
                    <Form.Check
                      inline
                      label="Woodworking"
                      name="Woodworking"
                      type={type}
                      id={`inline-${type}-6`}
                    />
                    <Form.Check
                      inline
                      label="Anthropologie"
                      name="Anthropologie"
                      type={type}
                      id={`inline-${type}-7`}
                    />
                    <Form.Check
                      inline
                      label="Science"
                      name="Science"
                      type={type}
                      id={`inline-${type}-8`}
                    />
                    <Form.Check
                      inline
                      label="English"
                      name="English"
                      type={type}
                      id={`inline-${type}-9`}
                    />
                    <Form.Check
                      inline
                      label="Writing"
                      name="Writing"
                      type={type}
                      id={`inline-${type}-10`}
                    />
                    <Form.Check
                      inline
                      label="Spanish"
                      name="Spanish"
                      type={type}
                      id={`inline-${type}-11`}
                    />
                    <Form.Check
                      inline
                      label="French"
                      name="French"
                      type={type}
                      id={`inline-${type}-12`}
                    />
                    <Form.Check
                      inline
                      label="Outdoor"
                      name="Outdoor"
                      type={type}
                      id={`inline-${type}-13`}
                    />
                    <Form.Check
                      inline
                      label="Physical Education"
                      name="Physical Education"
                      type={type}
                      id={`inline-${type}-14`}
                    />
                    <Form.Check
                      inline
                      label="Culture"
                      name="Culture"
                      type={type}
                      id={`inline-${type}-15`}
                    />
                  </div>
                </Row>
              ))}
            {/* <Form.Select defaultValue={project.subjects} name="newSubjects">
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
            </Form.Select> */}
            <div>
              <Badge pill bg="curriculum">
                {/* eventual badges for selected curriculums */}
              </Badge>{" "}
            </div>

            <Form.Label>Curriculum</Form.Label>
            <Form.Select defaultValue={project.curriculums} name="newCurriculums">
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
          <Form.Select defaultValue={project.est_time} name="newEstTime">
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
            defaultValue={project.overview_desc}
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
            defaultValue={project.directions}
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
            defaultValue={project.materials}
            name="newMaterials"
          />
        </Form.Group>
      </Col>
      <Col lg={12}>
        <Form.Group className="mb-3">
          <Form.Label>Resources</Form.Label>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            defaultValue={project.resources}
            name="newResources"
          />
        </Form.Group>
      </Col>

      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
}
