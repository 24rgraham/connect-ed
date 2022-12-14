import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ToggleButton from "react-bootstrap/ToggleButton";
import Badge from "react-bootstrap/Badge";

import API from "../../utils/API";
import ProjectCard from "../../components/ProjectCard";

export default function Search() {
  const [results, setResults] = useState([]);
  const handleSearch = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // const grades = []

    const searchCriteria = {
      grade_lvl: data.get("newGradeLevel"),
      est_time: data.get("newEstTime"),
      subjects: data.get("newSubjects"),
      curriculums: data.get("newCurriculums"),
    };
    //  console.log(searchCriteria)

    API.advancedSearch(searchCriteria).then((res) => {
      console.log(res);
      setResults(res);
      return results;
    });
  };

  console.log(results);
  //     useEffect(() => {
  //         setResults(searchResults)

  // });

  return (
    <>
      <Form className="new-project-form" onSubmit={handleSearch}>
        <Row>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>Grade Level</Form.Label>
              <Form.Select
                className="mb-3"
                defaultValue="Choose..."
                name="newGradeLevel"
              >
                <option value="">Choose...</option>
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
                <option value="Maths">Maths</option>
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
                <option value="PBL">PBL</option>
                <option value={5}>Reggio Emilia</option>
                <option value={6}>B.E.E.T.L.E.S (Outdoor Ed.) </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time to Complete</Form.Label>
              <Form.Select defaultValue="Choose..." name="newEstTime">
                <option value="">Choose...</option>
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
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {results[0] && (
        <div>
          <h3>
            <strong>Results</strong>
          </h3>
          <div className="results container d-flex flex-wrap">
            {results.map((projectInfo) => (
              <ProjectCard key={projectInfo.id} projectInfo={projectInfo} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
// <Form onSubmit={handleSearch}>
//     <Form.Label>Grade Level</Form.Label>
//   {["checkbox"].map((type) => (
//           <Row>
//       <div key={`inline-${type}`} className="mb-3">
//       <Form.Check
//         inline
//         label="Pre-K"
//         name="pre-k"
//         type={type}
//         id={`inline-${type}-1`}
//         />
//       <Form.Check
//         inline
//         label="K"
//         name="k"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="1"
//         name="1"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="2"
//         name="2"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="3"
//         name="3"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="4"
//         name="4"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="5"
//         name="5"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="6"
//         name="6"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="7"
//         name="7"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="8"
//         name="8"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="9"
//         name="9"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="10"
//         name="10"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="11"
//         name="11"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//       <Form.Check
//         inline
//         label="12"
//         name="12"
//         type={type}
//         id={`inline-${type}-2`}
//         />
//     </div>
//   </Row>
//   ))}
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>

// export default function Search() {
//   const [checked1, setChecked1] = useState(false);
//   const [checked2, setChecked2] = useState(false);
//   const [checked3, setChecked3] = useState(false);
//   const [checked4, setChecked4] = useState(false);
//   const [checked5, setChecked5] = useState(false);
//   const [checked6, setChecked6] = useState(false);
//   const [checked7, setChecked7] = useState(false);
//   const [checked8, setChecked8] = useState(false);
//   const [checked9, setChecked9] = useState(false);
//   const [checked10, setChecked10] = useState(false);
//   const [checked11, setChecked11] = useState(false);
//   const [checked12, setChecked12] = useState(false);
//   const [checked13, setChecked13] = useState(false);
//   const [checked14, setChecked14] = useState(false);

//   return (
//     <Form>
//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>Grade Level</Form.Label>
//           </Col>
//         </Row>
//         <Row>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked1}
//             value="1"
//             onChange={(e) => setChecked1(e.currentTarget.checked)}
//           >
//             Pre-K
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked2}
//             value="1"
//             onChange={(e) => setChecked2(e.currentTarget.checked)}
//           >
//             K
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked3}
//             value="1"
//             onChange={(e) => setChecked3(e.currentTarget.checked)}
//           >
//             1
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked4}
//             value="1"
//             onChange={(e) => setChecked4(e.currentTarget.checked)}
//           >
//             2
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked5}
//             value="1"
//             onChange={(e) => setChecked5(e.currentTarget.checked)}
//           >
//             3
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked6}
//             value="1"
//             onChange={(e) => setChecked6(e.currentTarget.checked)}
//           >
//             4
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked7}
//             value="1"
//             onChange={(e) => setChecked7(e.currentTarget.checked)}
//           >
//             5
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked8}
//             value="1"
//             onChange={(e) => setChecked8(e.currentTarget.checked)}
//           >
//             6
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked9}
//             value="1"
//             onChange={(e) => setChecked9(e.currentTarget.checked)}
//           >
//             7
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked10}
//             value="1"
//             onChange={(e) => setChecked10(e.currentTarget.checked)}
//           >
//             8
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked11}
//             value="1"
//             onChange={(e) => setChecked11(e.currentTarget.checked)}
//           >
//             9
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked12}
//             value="1"
//             onChange={(e) => setChecked12(e.currentTarget.checked)}
//           >
//             10
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked13}
//             value="1"
//             onChange={(e) => setChecked13(e.currentTarget.checked)}
//           >
//             11
//           </ToggleButton>
//             </Col>
//             <Col xs="auto">
//           <ToggleButton
//             className="mb-2"
//             id="toggle-check"
//             type="checkbox"
//             variant="outline-primary"
//             checked={checked14}
//             value="1"
//             onChange={(e) => setChecked14(e.currentTarget.checked)}
//           >
//             12
//           </ToggleButton>
//             </Col>
//         </Row>
//       </Form.Group>
//       {/* <GradeSearch/>
//                 <SubjectSearch/>
//                 <TimeSearch/>
//                 <CurriculumSearch/> */}

//       <button type="submit">
//         <Link to="/results">Search</Link>
//       </button>
//     </Form>
//   );
// }
// {
/* <label>Pre-K/K<input type='checkbox'></input></label>
<label>1<input type='checkbox'></input></label>
<label>2<input type='checkbox'></input></label>
<label>3<input type='checkbox'></input></label>
<label>4<input type='checkbox'></input></label>
<label>5<input type='checkbox'></input></label>
<label>6<input type='checkbox'></input></label>
<label>7<input type='checkbox'></input></label>
<label>8<input type='checkbox'></input></label>
<label>9<input type='checkbox'></input></label>
<label>10<input type='checkbox'></input></label>
<label>11<input type='checkbox'></input></label>
<label>12<input type='checkbox'></input></label> */
