import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useEffect,useState} from "react";
import API from './utils/API'
import './App.css'

import Headerbootstrap from './components/Headerbootstrap'
import Main from "./pages/Main";
import Login from './pages/Login';




function App() {
  const [userId, setUserId] = useState(0)
  const [userEmail, setUserEmail] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token")
    if(storedToken){
      console.log(storedToken)
      API.getUserFromToken(storedToken).then(data=>{
        if(data.user){
          console.log(data)
          setToken(storedToken)
          setIsLoggedIn(true)
          setUserId(data.user.id)
          setUserEmail(data.user.email)
        }
      })
    } else {
      console.log('no stored token')
    }
  },[])

  const handleLoginSubmit = userObj=>{
    API.login({
      email:userObj.email,
      password:userObj.password
    }).then(data=>{
      console.log(data);
      if(data.token){
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUserEmail(data.user.email)
        localStorage.setItem("token",data.token)
      }
    })
  }

  
  return (
    <div>
      <Router basename="/connect-ed">
        <Headerbootstrap />
        <Main userId={userId}
        token={token}/>
      </Router>
    </div>
  );
}

export default App;
