import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form action="submit">
          <label htmlFor="name"></label>
          <input type="text" name="name" id="name" placeholder="Full Name" />
          <div className="gender">
            <label htmlFor="gender">Gender:</label>
            <input type="radio" id="gender" name="gender" value="Male"></input>
            <input
              type="radio"
              id="gender"
              name="gender"
              value="Female"
            ></input>
            <input type="radio" id="gender" name="gender" value="Other"></input>
          </div>

          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="Email" />

          <label htmlFor="phone-number"></label>
          <input
            type="number"
            name="phone-number"
            id="phone-number"
            placeholder="Mobile number"
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
