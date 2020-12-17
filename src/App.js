import "./styles/app.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Course from "./components/Course";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:3000/api";
  const [token, setToken] = useState(false);
  const [name, setName] = useState("JOHN DOE");
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="App">
      <Router>
        {token ? <Redirect push to="/" /> : <Redirect push to="/login" />}
        <Switch>
          <Route path="/login" exact>
            <Login
              setIsAdmin={setIsAdmin}
              setName={setName}
              token={token}
              setToken={setToken}
            />
          </Route>
          <Route path="/">
            <nav className="top-nav">
              <Link to="/">
                <div id="logo">CLASS-AID</div>
              </Link>
              <Profile name={name} />
            </nav>
            <div className="container">
              <nav className="side-nav">
                <ul>
                  <li>HOME</li>
                  <li>GIFT</li>
                </ul>
              </nav>
              <div className="content">
                <Switch>
                  <Route path="/" exact>
                    <Course isAdmin={isAdmin} token={token} />
                  </Route>
                  <Route path="/addNewCourse" exact>
                    <form>
                      courseCode
                      <input type="text" name="" id="" />
                      courseNmae
                      <input type="text" />
                      <button>Submit</button>
                    </form>
                  </Route>
                </Switch>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
