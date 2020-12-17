import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const refEmail = useRef();
  const refPassword = useRef();
  const refName = useRef();
  const history = useHistory();
  const signupHandle = (e) => {
    e.preventDefault();
    console.log(refEmail.current.value);
    axios
      .post(`/user/register`, {
        name: refName.current.value,
        email: refEmail.current.value,
        password: refPassword.current.value,
      })
      .then((res) => {
        if (res) history.push("/login");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className="login-container">
      <form className="wrap">
        <div>
          <h1>SignUp</h1>
        </div>
        <div>
          <p>Name</p>
          <input ref={refName} type="text" />
        </div>
        <div>
          <p>Email</p>
          <input ref={refEmail} type="text" />
        </div>
        <div>
          <p>Password</p>
          <input ref={refPassword} type="password" />
        </div>
        <div className="login-button-group">
          <button onClick={signupHandle}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
