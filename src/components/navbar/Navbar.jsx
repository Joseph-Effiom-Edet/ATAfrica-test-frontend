import React from "react";
import "./navbar.scss";

function Navbar({ isOpen, setIsOpen }) {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="logo">Wealth</h1>
        <div className="links">
          <span>Invest</span>
          <span>Save</span>
          <span>Tax</span>
          <span>Learn</span>
        </div>
        <div className="buttons">
          <button>Login</button>
          <button>Get started</button>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
