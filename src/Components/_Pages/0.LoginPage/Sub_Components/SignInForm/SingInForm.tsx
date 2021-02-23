import React from "react";

//TYPES INTERFACE IMPORTS
import { ISignInForm } from "../../types";

//STYLE IMPORTS
import "./SignInForm.scss";

export default function SingInForm(props: ISignInForm) {
  return (
    <div className="sign-in form" style={{ display: props.show ? "" : "none" }}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        id="firstName"
        onChange={props.signIn}
        onKeyDown={props.signIn}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        id="lastName"
        onChange={props.signIn}
        onKeyDown={props.signIn}
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Username"
        id="username"
        onChange={props.signIn}
        onKeyDown={props.signIn}
      />
      <label htmlFor="email">E Mail</label>
      <input
        type="email"
        placeholder="E Mail"
        id="email"
        onChange={props.signIn}
        onKeyDown={props.signIn}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        onChange={props.signIn}
        onKeyDown={props.signIn}
      />
      <div className="checkStaff">
        <label htmlFor="role">Staff ?</label>
        <input
          type="checkbox"
          id="role"
          onChange={props.signIn}
          onKeyDown={props.signIn}
        />
      </div>
      <p onClick={() => props.showFunc()}>Already registered? Log in Here</p>
      <button>Sign In</button>
    </div>
  );
}
