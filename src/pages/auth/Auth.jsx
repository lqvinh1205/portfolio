import React from "react";
import Signin from "../../components/Auth/Signin";
import "./Auth.css";
const Auth = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="container-auth">
      <div className="auth-left">
        <div>
          <h1 className="title-auth">Welcom to website !</h1>
          <span className="text-auth">Now signin to redirect Admin !</span>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-right-content">
          <Signin />
        </div>
      </div>
    </div>
  );
};

export default Auth;
