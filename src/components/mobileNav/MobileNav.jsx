import React from "react";
import "./mobileNav.scss";

function MobileNav({ isOpen, setIsOpen }) {
  return (
    <div className="mobile-nav-container">
      <div className="logo-close">
        <h1 className="mobile-nav-logo">Wealth</h1>
        <button className="closer" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </button>
      </div>
      <div className="mobile-nav-wrapper">
        <div className="mobile-nav-links">
          <span>Invest</span>
          <span>Save</span>
          <span>Tax</span>
          <span>Learn</span>
        </div>
        <div className="mobile-nav-buttons">
          <button>Login</button>
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
