import React from "react";
import "./style.css";

function Signup() {
  // event.preventDefault();
  // const data = new FormData(event.currentTarget)
  // const newUser = {
  //     firstName: data.get('newFirstName'),
  //     lastName: data.get('newLastName'),
  //     email: data.get('newLastName'),
  //     password: data.get('newPassword'),
  //     school: data.get('newSchool'),
  //     city: data.get('newCity'),
  //     state: data.get('newState'),
  //     language: data.get('newLanguage'),
  // This will be for the cloudinary upload widget
  // }
  return (
    <form className="g-3 signupContainer">
      <h4>Signup</h4>
      <div className="col-md-6">
        <label htmlFor="inputFirstName" className="form-label">
          First Name
        </label>
        <input type="text" className="form-control" id="inputFirstName"></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputLastName" className="form-label">
          Last Name
        </label>
        <input type="text" className="form-control" id="inputLastName"></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="inputEmail"></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
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
        ></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          City
        </label>
        <input type="text" className="form-control" id="inputCity"></input>
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">
          State
        </label>
        <select
          id="inputState"
          className="form-select"
          defaultValue={"Choose..."}
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
      <div className="col-12"></div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </div>
    </form>
  );
}

export default Signup;