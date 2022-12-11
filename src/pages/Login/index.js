import React from "react";
import "./style.css"

export default function Login() {
  return (
    <form className="loginContainer">
      <h4>Login</h4>
      <div className="col-6">
        <label className="form-label">
          Email address
        </label>
        <input
          className="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
        ></input>
      </div>
      <div className="col-6 mb-4">
        <label className="form-label">
          Password
        </label>
        <input className="form-control" id="InputPassword"></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
