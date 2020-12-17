import React, { useRef ,useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";

const Login = ({ setIsAdmin, token, setToken, setName }) => {
  const refEmail = useRef();
  const refPassword = useRef();
  const [loginError,setLoginError] = useState(null);
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
        setLoginError(err.response.data);
        console.log(err.response.data);
      });
  };

  return (
    <div className="login-container">
      <form className="wrap">
        <div>
          <h1>Login</h1>
        </div>
        {loginError && (<div className="error">
          {loginError}
        </div>)}  
        <div>
          <p>Email</p>
          <input ref={refEmail} type="text" />
        </div>
        <div>
          <p>Password</p>
          <input ref={refPassword} type="password" />
        </div>
        <div className="login-button-group">
          <button onClick={loginHandle}>Login</button>
          <div>
            <p>Not a member? </p>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
