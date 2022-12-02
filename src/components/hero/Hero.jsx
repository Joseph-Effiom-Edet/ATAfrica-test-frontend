import React from "react";
import "./hero.scss";
import stock from "../../assets/stock.jpg";

function Hero() {
  return (
    <div className="hero-container">
      <div className="wrapper">
        <div className="text-content">
          <h1>
            Get your
            <br />
            investing eggs
            <br />
            in way more baskets.
          </h1>
          <p>
            Stocks are great for making bets, but they’re only part of the
            investing story. Wealthfront makes it easy to build long-term wealth
            with fully diversified portfolios that help you manage risk,
            maximize returns, and minimize taxes.
          </p>
          <button>Get started</button>
        </div>
        <div className="hero-image">
          <img src={stock} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
