import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-item1">
          <h1>Wealth</h1>
        </div>
        <div className="footer-item2">
          <h1>Investing</h1>
          <div className="footer-links">
            <span>Automated Investing</span>
            <span>Explore all Investmants</span>
            <span>Retirement</span>
            <span>College</span>
            <span>Social Responsible</span>
            <span>Pricing</span>
            <span>Tax-Loss Harvesting</span>
            <span>Historical Performance</span>
            <span>White Papers</span>
          </div>
        </div>
        <div className="footer-item3">
          <h1>Save</h1>
          <div className="footer-links">
            <span>Save</span>
            <span>ATM Locators</span>
          </div>
          <h1>Borrow</h1>
          <div className="footer-links">
            <span>Borrow</span>
          </div>
        </div>
        <div className="footer-item4">
          <h1>Learn</h1>
          <div className="footer-links">
            <span>Blog</span>
            <span>Help Center</span>
            <span>What level of risk suits you best?</span>
            <span>Investing Guide</span>
            <span>Home Planning Guide</span>
            <span>Financial Health Guide</span>
            <span>Equity and IPO Guide</span>
            <span>IRA Contributions Calculator</span>
          </div>
        </div>
        <div className="footer-item5">
          <h1>About</h1>
          <div className="footer-links">
            <span>About Us</span>
            <span>New Rooms</span>
            <span>Reviews</span>
            <span>Careers</span>
            <span>Legal</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
