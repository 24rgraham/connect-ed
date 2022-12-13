import React, { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import "./style.css";
import ImageUpload from "../../components/ImageUpload";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [language, setLanguage] = useState("");
  const [imageData, setImageData] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();
    props.handleSignUpSubmit({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      school: school,
      city: city,
      state: state,
      language: language,
      image: `https://res.cloudinary.com/dqv6cj4bc/image/upload/v1668535173/${imageData.public_id}`,
    });
    const handleResponse = (res) => {
      setImageData(res.data);
    };
    navigate("/mypage");
  };

import API from "../../utils/API"


function Signup() {

  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false)
 
  
  


  return (
    <form className="g-3 signupContainer">
      <h4>Signup</h4>
      <div className="col-md-6">
        <label htmlFor="inputFirstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputLastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputLastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="col-6">
        <label htmlFor="inputAddress" className="form-label">
          School
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder=""
          name="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        ></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="inputCity"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">
          State
        </label>
        <select
          id="inputState"
          className="form-select"
          defaultValue={"Choose..."}
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="...">Choose...</option>
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
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="inputLanguage" className="form-label">
          Language
        </label>
        <select
          id="inputLanguage"
          className="form-select"
          defaultValue={"Choose..."}
          name="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="...">Choose...</option>
          <option value="EN">English</option>
          <option value="ES">Spanish</option>
          <option value="ZH">Chinese(Mandarin)</option>
          <option value="TL">Tagalog</option>
          <option value="VI">Vietnamese</option>
          <option value="FR">French</option>
        </select>
      </div>
      <div>
        <label>Profile Picture</label>
        <ImageUpload imageData={imageData} />
      </div>
      <div className="col-12"></div>
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={signUpHandler}
        >
          Create Account
        </button>
      </div>
    </form>
  );
}
}