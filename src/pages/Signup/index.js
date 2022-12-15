import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import API from "../../utils/API";
import "./style.css";

export default function SignUp(props) {
  // const [userId, setUserId] = useState(0);
  // const [userEmail, setUserEmail] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const uploadAvatar = () => {
    console.log(url)
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

  const signUpHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      email: data.get("email"),
      password: data.get("password"),
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
      school: data.get("school"),
      city: data.get("city"),
      state: data.get("state"),
      language: data.get("language"),
      profile_picture: `${url}`,
    };
    props.handleSignupSubmit(newUser);
    navigate("/community-projects");
  };

  // const handleResponse = (res) => {
  //   setImageData(res.data);
  // };

  return (
    <Form className="g-3 signupContainer" onSubmit={signUpHandler}>
      <h4>Signup</h4>
      <Row>
        <Col className="col-md-3">
          <Form.Label htmlFor="inputFirstName" className="formForm.Label-label">
            First Name
          </Form.Label>
          <input
            type="text"
            className="form-control"
            id="inputFirstName"
            name="firstName"
            // onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </Col>
        <Col className="col-md-3">
          <label htmlFor="inputLastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            name="lastName"
            // onChange={(e) => setLastName(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row className="col-md-4">
        <Col>
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            // onChange={(e) => setEmail(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">
            School
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder=""
            name="school"
            // onChange={(e) => setSchool(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-3">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            name="city"
            // onChange={(e) => setCity(e.target.value)}
          ></input>
        </Col>
        <Col className="col-md-3">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          {/* select state */}
          <select
            id="inputState"
            className="form-select"
            // defaultValue={"Choose..."}
            name="state"
            // onChange={(e) => setState(e.target.value)}
          >
            <option value="">Choose...</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
            // onChange={(e) => setPassword(e.target.value)}
          ></input>
        </Col>
        <Col className="col-md-3 mb-3">
          <label htmlFor="inputLanguage" className="form-label">
            Language
          </label>
          {/* select language */}
          <select
            id="inputLanguage"
            className="form-select"
            // defaultValue={"Choose..."}
            name="language"
            // onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Choose...</option>
            <option value="EN">English</option>
            <option value="ES">Spanish</option>
            <option value="ZH">Chinese(Mandarin)</option>
            <option value="TL">Tagalog</option>
            <option value="VI">Vietnamese</option>
            <option value="FR">French</option>
          </select>
        </Col>
      </Row>
      <Row className="col-12 mb-3">
        <label className="form-label">Profile Picture</label>
        <div>
          <input
            type="file"
            name="file"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={uploadAvatar}
          >
            Upload Image
          </button>
          <div className="avatar">
            <img src={url} />
          </div>
        </div>
      </Row>
      <Row xs="auto">
        <Button variant="primary" type="submit" className="btn btn-primary">
          Create Account
        </Button>
      </Row>
    </Form>
  );
}
