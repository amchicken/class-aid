import React, { useRef } from "react";
import axios from "axios";
import jwt from "jwt-decode";

const Login = ({ setIsAdmin, token, setToken, setName }) => {
  const refEmail = useRef();
  const refPassword = useRef();
  const loginHandle = (e) => {
    e.preventDefault();
    axios
      .post(`/user/login`, {
        email: refEmail.current.value,
        password: refPassword.current.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res) console.log("Login Sucess");
        setToken(true);
        axios.defaults.headers.common["auth-token"] = res.data;
        const decoded = jwt(res.data);
        setName(decoded.name);
        setIsAdmin(decoded.isAdmin);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="login-container">
      <form className="warp">
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <p>Email</p>
          <input ref={refEmail} type="text" />
        </div>
        <div>
          <p>Password</p>
          <input ref={refPassword} type="password" />
        </div>
        <button onClick={loginHandle}>Login</button>
      </form>
    </div>
  );
};

export default Login;