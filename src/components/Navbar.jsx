import React, { useState } from "react";

import { Link } from "react-router-dom";
import Login from "./Login";
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <>
      <div className="navbar-hero text-black">
        <div className="navbar-logo">
          <h1>Logo</h1>
          <div className="navbar">
            <ul>
              <li>
                <Link
                  className={menu === "home" ? "active" : ""}
                  onClick={() => setMenu("home")}
                  to="/"
                  offset={-120}
                  duration={500}
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={menu === "contact" ? "active" : ""}
                  onClick={() => setMenu("contact")}
                  to="contact"
                  smooth={true}
                  offset={-120}
                  duration={1600}
                >
                  {" "}
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={menu === "login" ? "active" : ""}
                  onClick={() => console.log("login clicked")}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className={menu === "signup" ? "active" : ""}
                  onClick={() => setMenu("signup")}
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
