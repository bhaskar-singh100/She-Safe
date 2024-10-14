import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login-form">
        <h1>Log In</h1>
        <form action="submit">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email or Phone number"
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit">Log In</button>
        </form>
        <h3>OR</h3>
        <h4>Forgot password?</h4>
        <p>
          New to She's Safe? <a>Register Now.</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
