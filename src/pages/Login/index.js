import React, {useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'

export default function Login(props) {

  const navigate = useNavigate();
    useEffect(()=>{
      if(props.isLoggedIn){
        navigate("/mypage")
      }
    },[props.isLoggedIn])

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
 
  const loginHandle=e=>{
    e.preventDefault();
    props.handleLoginSubmit({
      email:loginEmail, 
      password:loginPassword
    })
  }

  return (
    <form onSubmit={loginHandle}>
      <div>
        <label for="InputEmail" className="form-label" >
          Email Address 
        </label>
        <input
          className="form-control"
          type="text"
          id="InputEmail"
          aria-describedby="emailHelp"
          name="email" 
          value={loginEmail} 
          onChange={e=>setLoginEmail(e.target.value)}
        ></input>
      </div>
      <div className="">
        <label for="InputPassword" className="form-label">
          Password
        </label>
        <input type="password"
        className="form-control" 
        id="InputPassword"
        name="password"
        value={loginPassword}
        onChange={e=>setLoginPassword(e.target.value)}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
