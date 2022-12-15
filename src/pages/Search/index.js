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
    
    const grades = []
    if (data.get('pre-k')){
      grades.push('Pre-K')
    }
    if (data.get('k')){
      grades.push('K')
    }
    if (data.get('1')){
      grades.push('1')
    }
    if (data.get('2')){
      grades.push('2')
    }
    if (data.get('3')){
      grades.push('3')
    }
    if (data.get('4')){
      grades.push('4')
    }
    if (data.get('5')){
      grades.push('5')
    }
    if (data.get('6')){
      grades.push('6')
    }
    if (data.get('7')){
      grades.push('7')
    }
    if (data.get('8')){
      grades.push('8')
    }
    if (data.get('9')){
      grades.push('9')
    }
    if (data.get('10')){
      grades.push('10')
    }
    if (data.get('11')){
      grades.push('11')
    }
    if (data.get('12')){
      grades.push('12')
    }
    console.log(grades);

    const subjects = []
    if (data.get('Art')){
      subjects.push('Art')
    }
    if (data.get('Maths')){
      subjects.push('Maths')
    }
    if (data.get('History')){
      subjects.push('History')
    }
    if (data.get('SEL')){
      subjects.push('SEL')
    }
    if (data.get('Woodworking')){
      subjects.push('Woodworking')
    }
    if (data.get('Anthropologie')){
      subjects.push('Anthropologie')
    }
    if (data.get('Science')){
      subjects.push('Science')
    }
    if (data.get('English')){
      subjects.push('English')
    }
    if (data.get('Writing')){
      subjects.push('Writing')
    }
    if (data.get('Spanish')){
      subjects.push('Spanish')
    }
    if (data.get('French')){
      subjects.push('French')
    }
    if (data.get('Outdoor')){
      subjects.push('Outdoor')
    }
    if (data.get('Physical Education')){
      subjects.push('Physical Education')
    }
    if (data.get('Culture')){
      subjects.push('Culture')
    }
    console.log(subjects);

    const time = []
    if (data.get('t0')){
      time.push('0')
    }
    if (data.get('t1')){
      time.push('1')
    }
    if (data.get('t2')){
      time.push('2')
    }
    if (data.get('t3')){
      time.push('3')
    }
    if (data.get('t4')){
      time.push('4')
    }
    if (data.get('t5')){
      time.push('5')
    }
    if (data.get('t6')){
      time.push('6')
    }
    if (data.get('t7')){
      time.push('7')
    }
    if (data.get('t8')){
      time.push('8')
    }
    if (data.get('t9')){
      time.push('9')
    }
    if (data.get('t10')){
      time.push('10')
    }
    if (data.get('t11')){
      time.push('11')
    }
    console.log(time);

    const curriculum = []
    if (data.get('Montessori')){
      curriculum.push('Montessori')
    }
    if (data.get('Waldorf')){
      curriculum.push('Waldorf')
    }
    if (data.get('Standard')){
      curriculum.push('Standard')
    }
    if (data.get('PBL')){
      curriculum.push('PBL')
    }
    if (data.get('Reggio Emilia')){
      curriculum.push('Reggio Emilia')
    }
    if (data.get('B.E.E.T.L.E.S (Outdoor Ed.)')){
      curriculum.push('B.E.E.T.L.E.S (Outdoor Ed.)')
    }
    console.log(curriculum);

    if (grades[0]&&time[0]&&subjects[0]&&curriculum[0]){
      const searchCriteria = {grade_lvl: grades, est_time: time, subject: subjects, curriculum: curriculum}
      console.log(searchCriteria);
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (grades[0]&&time[0]&&subjects[0]){
      const searchCriteria = {grade_lvl: grades, est_time: time, subject: subjects}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (grades[0]&&time[0]&&curriculum[0]){
      const searchCriteria = {grade_lvl: grades, est_time: time, curriculum: curriculum}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (grades[0]&&subjects[0]&&curriculum[0]){
      const searchCriteria = {grade_lvl: grades, subject: subjects, curriculum: curriculum}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (time[0]&&subjects[0]&&curriculum[0]){
      const searchCriteria = {est_time: time, subject: subjects, curriculum: curriculum}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (grades[0]&&time[0]){
      console.log('yes12');
      const searchCriteria = {grade_lvl: grades, est_time: time}
      console.log(searchCriteria);
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } if (grades[0]&&curriculum[0]){
      const searchCriteria = {grade_lvl: grades, curriculum: curriculum}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (subjects[0]&&curriculum[0]){
      const searchCriteria = {subject: subjects, curriculum: curriculum}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (grades[0]&&subjects[0]){
      const searchCriteria = {grade_lvl: grades, subject: subjects}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (time[0]&&subjects[0]){
      const searchCriteria = {est_time: time, subject: subjects}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (time[0]&&curriculum[0]){
      const searchCriteria = {est_time: time, curriculum: curriculum}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (grades[0]){
      console.log('boom');
      
      const searchCriteria = {grade_lvl: grades}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (time[0]){
      const searchCriteria = {est_time: time}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (subjects[0]){
      const searchCriteria = {subject: subjects}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else if (curriculum[0]){
      const searchCriteria = {curriculum: curriculum}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
      return
    } else {
      const searchCriteria = {}
      API.advancedSearch(searchCriteria).then((res) => {
        console.log(res);
        setResults(res);
      })
    }
  };

  console.log(results);
  //     useEffect(() => {
  //         setResults(searchResults)

  // });

  return (
    <>
    <div className="searchContainer">
      <Form className="new-project-form" onSubmit={handleSearch}>
        <Row>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>Grade Level</Form.Label>
              {["checkbox"].map((type) => (
                <Row>
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Pre-K"
                      name="pre-k"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="K"
                      name="k"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="1"
                      name="1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="2"
                      name="2"
                      type={type}
                      id={`inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      label="3"
                      name="3"
                      type={type}
                      id={`inline-${type}-5`}
                    />
                    <Form.Check
                      inline
                      label="4"
                      name="4"
                      type={type}
                      id={`inline-${type}-6`}
                    />
                    <Form.Check
                      inline
                      label="5"
                      name="5"
                      type={type}
                      id={`inline-${type}-7`}
                    />
                    <Form.Check
                      inline
                      label="6"
                      name="6"
                      type={type}
                      id={`inline-${type}-8`}
                    />
                    <Form.Check
                      inline
                      label="7"
                      name="7"
                      type={type}
                      id={`inline-${type}-9`}
                    />
                    <Form.Check
                      inline
                      label="8"
                      name="8"
                      type={type}
                      id={`inline-${type}-10`}
                    />
                    <Form.Check
                      inline
                      label="9"
                      name="9"
                      type={type}
                      id={`inline-${type}-11`}
                    />
                    <Form.Check
                      inline
                      label="10"
                      name="10"
                      type={type}
                      id={`inline-${type}-12`}
                    />
                    <Form.Check
                      inline
                      label="11"
                      name="11"
                      type={type}
                      id={`inline-${type}-13`}
                    />
                    <Form.Check
                      inline
                      label="12"
                      name="12"
                      type={type}
                      id={`inline-${type}-14`}
                    />
                  </div>
                </Row>
              ))}
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
                      id={`inline-${type}-15`}
                    />
                    <Form.Check
                      inline
                      label="Maths"
                      name="Maths"
                      type={type}
                      id={`inline-${type}-16`}
                    />
                    <Form.Check
                      inline
                      label="History"
                      name="History"
                      type={type}
                      id={`inline-${type}-17`}
                    />
                    <Form.Check
                      inline
                      label="SEL"
                      name="SEL"
                      type={type}
                      id={`inline-${type}-18`}
                    />
                    <Form.Check
                      inline
                      label="Woodworking"
                      name="Woodworking"
                      type={type}
                      id={`inline-${type}-19`}
                    />
                    <Form.Check
                      inline
                      label="Anthropologie"
                      name="Anthropologie"
                      type={type}
                      id={`inline-${type}-20`}
                    />
                    <Form.Check
                      inline
                      label="Science"
                      name="Science"
                      type={type}
                      id={`inline-${type}-21`}
                    />
                    <Form.Check
                      inline
                      label="English"
                      name="English"
                      type={type}
                      id={`inline-${type}-22`}
                    />
                    <Form.Check
                      inline
                      label="Writing"
                      name="Writing"
                      type={type}
                      id={`inline-${type}-23`}
                    />
                    <Form.Check
                      inline
                      label="Spanish"
                      name="Spanish"
                      type={type}
                      id={`inline-${type}-24`}
                    />
                    <Form.Check
                      inline
                      label="French"
                      name="French"
                      type={type}
                      id={`inline-${type}-25`}
                    />
                    <Form.Check
                      inline
                      label="Outdoor"
                      name="Outdoor"
                      type={type}
                      id={`inline-${type}-26`}
                    />
                    <Form.Check
                      inline
                      label="Physical Education"
                      name="Physical Education"
                      type={type}
                      id={`inline-${type}-27`}
                    />
                    <Form.Check
                      inline
                      label="Culture"
                      name="Culture"
                      type={type}
                      id={`inline-${type}-28`}
                    />
                  </div>
                </Row>
              ))}
              <div>
                <Badge pill bg="curriculum">
                  {/* eventual badges for selected curriculums */}
                </Badge>{" "}
              </div>

              <Form.Label>Curriculum</Form.Label>
              {["checkbox"].map((type) => (
                <Row>
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Montessori"
                      name="Montessori"
                      type={type}
                      id={`inline-${type}-29`}
                    />
                    <Form.Check
                      inline
                      label="Waldorf"
                      name="Waldorf"
                      type={type}
                      id={`inline-${type}-30`}
                    />
                    <Form.Check
                      inline
                      label="Reggio Emilia"
                      name="Reggio Emilia"
                      type={type}
                      id={`inline-${type}-31`}
                    />
                    <Form.Check
                      inline
                      label="Standard"
                      name="Standard"
                      type={type}
                      id={`inline-${type}-32`}
                    />
                    <Form.Check
                      inline
                      label="PBL"
                      name="PBL"
                      type={type}
                      id={`inline-${type}-34`}
                    />
                    <Form.Check
                      inline
                      label="B.E.E.T.L.E.S (Outdoor Ed.)"
                      name="B.E.E.T.L.E.S (Outdoor Ed.)"
                      type={type}
                      id={`inline-${type}-35`}
                    />
                  </div>
                </Row>
              ))}

            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time to Complete</Form.Label>
              {["checkbox"].map((type) => (
                <Row>
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="30 min or less"
                      name="t0"
                      type={type}
                      id={`inline-${type}-36`}
                    />
                    <Form.Check
                      inline
                      label="30-60 min"
                      name="t1"
                      type={type}
                      id={`inline-${type}-37`}
                    />
                    <Form.Check
                      inline
                      label="1-2 hours"
                      name="t2"
                      type={type}
                      id={`inline-${type}-38`}
                    />
                    <Form.Check
                      inline
                      label="Half a Day"
                      name="t3"
                      type={type}
                      id={`inline-${type}-39`}
                    />
                    <Form.Check
                      inline
                      label="1 Day"
                      name="t4"
                      type={type}
                      id={`inline-${type}-40`}
                    />
                    <Form.Check
                      inline
                      label="2 Days"
                      name="t5"
                      type={type}
                      id={`inline-${type}-41`}
                    />
                    <Form.Check
                      inline
                      label="3 Days"
                      name="t6"
                      type={type}
                      id={`inline-${type}-42`}
                    />
                    <Form.Check
                      inline
                      label="4 Days"
                      name="t7"
                      type={type}
                      id={`inline-${type}-43`}
                    />
                    <Form.Check
                      inline
                      label="1 Week"
                      name="t8"
                      type={type}
                      id={`inline-${type}-44`}
                    />
                    <Form.Check
                      inline
                      label="2 Weeks"
                      name="t9"
                      type={type}
                      id={`inline-${type}-45`}
                    />
                    <Form.Check
                      inline
                      label="3 Weeks"
                      name="t10"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="1 Month"
                      name="t11"
                      type={type}
                      id={`inline-${type}-46`}
                    />
                  </div>
                </Row>
              ))}

              {/* <Form.Select defaultValue="Choose..." name="newEstTime">
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
              </Form.Select> */}
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
</div>
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
