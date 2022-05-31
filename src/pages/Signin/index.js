import React, { useState } from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import ErrorSignIn from "./ErrorSignIn";
import "./index.scss";
const Index = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();
  localStorage.setItem("Token", false);

  const handleButtonSignIn = () => {
    const account = { ...localStorage };
    const keys = Object.keys(account);
    const values = Object.values(account);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === name && values[i] === password) {
        localStorage.setItem("Token", true);
        return navigate("/");
      } else {
        setErrors(true);
        localStorage.setItem("Token", false);
      }
    }
  };

  return (
    <div className="container-form-signin">
      <div className="wrapper-form-signin">
        <div className="form-sigup-title">
          <h1>Sign In</h1>
        </div>
        <div className="form-field">
          <div className="form-input">
            <label>
              Name *
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="email"
                placeholder="Name"
              />
            </label>
            <label>
              Password *
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
            {errors && <ErrorSignIn />}
            <button
              onClick={handleButtonSignIn}
              className="btn-signin"
              type="submit"
            >
              Sign In
            </button>
            <Link to="/signup">
              <div className="btn-to-signup">
                <h4>Sign Up</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
