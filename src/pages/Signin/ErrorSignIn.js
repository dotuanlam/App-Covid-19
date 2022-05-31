import React from "react";
import "./ErrorSignin.scss";

const ErrorSignIn = () => {
  return (
    <div className="errorSignIn">
      <p style={{ color: "red" }}>*Please check your name or password*</p>
    </div>
  );
};

export default ErrorSignIn;
