import React from "react";

//TYPES INTERFACE IMPORTS
import { ILoginForm } from "../../types";

//STYLE IMPORTS
import "./LoginForm.scss";

export default function LoginForm(props: ILoginForm) {
  return (
    <div className="login form" style={{ display: props.show ? "none" : "" }}>
      <button className="google-login">
        <i className="fab fa-google"></i>
        <a href="http://localhost:5000/users/googleLogin">Log in with Google</a>
      </button>
      <button className="fb-login">
        <i className="fab fa-facebook-f"></i>
        <a href="http://localhost:5000/users/facebookLogin">
          Log in with Facebook
        </a>
      </button>
      <p> or </p>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Username"
        id="username"
        onChange={props.login}
        onKeyDown={props.login}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        onChange={props.login}
        onKeyDown={props.login}
      />
      <p onClick={() => props.showFunc()}>Not registered yet? Register now</p>
      <button>Login</button>
    </div>
  );
}
