import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import API from "./utils/API";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SingleProject from "./pages/SingleProject";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import Search from "./pages/Search";
import SearchResults from "./pages/SearchResults";

import "./App.css";
import Headerbootstrap from "./components/Headerbootstrap";

function App() {
  const [userId, setUserId] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // console.log("storedtoken:" + storedToken);
      API.getUserFromToken(storedToken).then((data) => {
        if (data.user) {
          // console.log("data:" + data);
          setToken(storedToken);
          setIsLoggedIn(true);
          setUserId(data.user.id);
          setUserEmail(data.user.email);
        }
      });
    } else {
      console.log("no stored token");
    }
  }, []);

  const handleLoginSubmit = (userObj) => {
    API.login({
      email: userObj.email,
      password: userObj.password,
    }).then((data) => {
      console.log(data);
      if (data.token) {
        setUserId(data.user.id);
        setToken(data.token);
        setIsLoggedIn(true);
        setUserEmail(data.user.email);
        localStorage.setItem("token", data.token);
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken("");
    setUserId(0);
    setUserEmail("");

  };

  return (
    <div>
      <Router>
        <Headerbootstrap
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          handleLogout={handleLogout}
        />
        <main className="mainContainer">
          <Routes>
            <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={ <Login
                  isLoggedIn={isLoggedIn}
                  handleLoginSubmit={handleLoginSubmit}/>
              }/>
            <Route path="/projects" element={<Projects
                token={token}/>} />
            <Route path="/login" element={
              <Login
                isLoggedIn={isLoggedIn}
                handleLoginSubmit={handleLoginSubmit}
              // handleLogout={handleLogout}
              />
            }
            />
            <Route path="/project/:id" element={<SingleProject
            //hardocoded project 1 for example
              projectId={1} />} />
            {/* <Route
              path="/project/:id"
              render={({ match }) => (
                <SingleProject projectId={match.params.id} />
              )}
            /> */}
            <Route path="/create" element={<NewProject 
            token={token}/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/results" element={<SearchResults />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
