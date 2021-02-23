import React, { useEffect, useState } from "react";

//TYPES INTERFACES IMPORTS
import {
  EventForm,
  loginState,
  ILoginForm,
  ISignInForm,
  signInState,
  ILoginState,
  ISignInState,
} from "./types";

//PERSONAL COMPONENTS IMPORTS
import LoginForm from "./Sub_Components/LoginForm/LoginForm";
import SignInForm from "./Sub_Components/SignInForm/SingInForm";

//STYLE IMPORTS
import "./LoginPage.scss";

export default function LoginPage() {
  //USE STATE
  const [login, setLogin] = useState<ILoginState>(loginState);
  const [signIn, setSignIn] = useState<ISignInState>(signInState);
  const [form, setForm] = useState(false);

  //PROPS TO PASS
  const loginProps: ILoginForm = {
    username: login.username,
    password: login.password,
    login: (e: EventForm) => loginForm(e),
    show: form,
    showFunc: () => setForm(!form),
  };

  const signInProps: ISignInForm = {
    firstName: signIn.firstName,
    lastName: signIn.lastName,
    username: signIn.username,
    email: signIn.email,
    password: signIn.password,
    role: signIn.role,
    signIn: (e: EventForm) => signInForm(e),
    show: form,
    showFunc: () => setForm(!form),
  };

  //UTILITIES
  const loginForm = (e: EventForm) => {
    let filledForm: ILoginState = { ...login };
    let property: keyof typeof filledForm;
    let currentId = e.currentTarget.id;
    for (property in filledForm) {
      if (property.toString() === currentId) {
        filledForm[property] = e.currentTarget.value;
        setLogin(filledForm);
      }
    }
  };
  const signInForm = (e: EventForm) => {
    let filledForm: ISignInState = { ...signIn };
    let property: keyof typeof filledForm;
    let currentId = e.currentTarget.id;
    for (property in filledForm) {
      if (property.toString() === "role") {
        let check = e.currentTarget.checked;
        check
          ? (filledForm[property] = "Staff")
          : (filledForm[property] = "Student");
        setSignIn(filledForm);
      } else if (property.toString() === currentId) {
        filledForm[property] = e.currentTarget.value;
        setSignIn(filledForm);
      }
    }
  };

  return (
    <div id="login-page">
      <div className="login-container">
        <header>
          <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
          <p>Auth Login Form</p>
        </header>
        <SignInForm {...signInProps} />
        <LoginForm {...loginProps} />
      </div>
    </div>
  );
}
