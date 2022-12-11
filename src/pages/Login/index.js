import React, { useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import API from "../../utils/API"

export default function Login(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.isLoggedIn) {
      navigate("/mypage")
    }
  }, [props.isLoggedIn])

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setPassword] = useState("");
  
 
  const handleLoginSubmit = e => {
    e.preventDefault();
    handleLogin({
      email: loginEmail,
      password: loginPassword,
    })
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <div className="">
        <label for="InputEmail" value={loginEmail} className="form-label">
          Email Address
        </label>
        <input
          className="form-control"
          value={loginEmail} onChange={e => setLoginEmail(e.target.value)}
          id="InputEmail"
          aria-describedby="emailHelp"
        ></input>
      </div>
      <div className="">
        <label for="InputPassword"  className="form-label">
          Password
        </label>
        <input className="form-control" value={loginPassword} onChange={e => setPassword(e.target.value)} id="InputPassword"></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}


