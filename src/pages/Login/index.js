import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import "../../App";

export default function Login(props) {
  console.log(props);
  const navigate = useNavigate();
  useEffect(() => {
    if (props.isLoggedIn) {
      navigate("/projects");
    }
  }, []);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginHandle = (e) => {
    e.preventDefault();
    console.log(props);
    props.handleLoginSubmit({
      email: loginEmail,
      password: loginPassword,
    });
    navigate("/mypage");
  };

  return (
    <form className="loginContainer" onSubmit={loginHandle}>
      <div className=" col-6">
        <h1>Login</h1>
        <label className="form-label">Email Address</label>
        <input
          className="form-control"
          type="text"
          id="InputEmail"
          aria-describedby="emailHelp"
          name="email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        ></input>
      </div>
      <div className=" col-6 mb-4">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="InputPassword"
          name="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
