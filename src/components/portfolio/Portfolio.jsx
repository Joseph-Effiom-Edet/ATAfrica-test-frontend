import React, { useState } from "react";
import { useEffect } from "react";
import "./portfolio.scss";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderVisibility, setSliderVisibility] = useState(0);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);

  //FETCH DATA FROM BACKEND API AND SAVE IN STATE
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "https://at-africa-test-backend.vercel.app/"
        );
        setPortfolioData(data.data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  //FILTER DATA AND SAVE IN STATE
  useEffect(() => {
    const filter = portfolioData.filter(
      (portfolio) => portfolio.tolerance === parseInt(sliderValue)
    );
    setFilteredPortfolio(filter);
  }, [portfolioData, sliderValue]);

  function handleSlider(e) {
    setSliderValue(e.target.value);
  }

  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        <div className="portfolio-chart">
          <h1>Example portfolio</h1>
          <span>Select risk tolerance below</span>
          <span className="tolerance-level">
            Tolerance level: {sliderValue}
          </span>
          <div className="portfolios">
            {filteredPortfolio[0]?.nigerianStocks !== 0 && (
              <div className="progress-bar">
                <CircularProgressbar
                  value={filteredPortfolio[0]?.nigerianStocks}
                  text={
                    "Nigerian Stocks " +
                    filteredPortfolio[0]?.nigerianStocks +
                    "%"
                  }
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "teal",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "8px",
                  })}
                />
              </div>
            )}
            {filteredPortfolio[0]?.foreignStocks !== 0 && (
              <div className="progress-bar">
                <CircularProgressbar
                  value={filteredPortfolio[0]?.foreignStocks}
                  text={
                    "Foreign Stocks " +
                    filteredPortfolio[0]?.foreignStocks +
                    "%"
                  }
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "teal",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "8px",
                  })}
                />
              </div>
            )}
            {filteredPortfolio[0]?.techStocks !== 0 && (
              <div className="progress-bar">
                <CircularProgressbar
                  value={filteredPortfolio[0]?.techStocks}
                  text={"Tech Stocks " + filteredPortfolio[0]?.techStocks + "%"}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "teal",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "8px",
                  })}
                />
              </div>
            )}
            {filteredPortfolio[0]?.emergingStocks !== 0 && (
              <div className="progress-bar">
                <CircularProgressbar
                  value={filteredPortfolio[0]?.emergingStocks}
                  text={
                    "Emerging Stocks " +
                    filteredPortfolio[0]?.emergingStocks +
                    "%"
                  }
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "teal",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "8px",
                  })}
                />
              </div>
            )}
            {filteredPortfolio[0]?.nigerianBonds !== 0 && (
              <div className="progress-bar">
                <CircularProgressbar
                  value={filteredPortfolio[0]?.nigerianBonds}
                  text={
                    "Nigerian Bonds " +
                    filteredPortfolio[0]?.nigerianBonds +
                    "%"
                  }
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "teal",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "8px",
                  })}
                />
              </div>
            )}
            {filteredPortfolio[0]?.foreignBonds !== 0 && (
              <div className="progress-bar">
                <CircularProgressbar
                  value={filteredPortfolio[0]?.foreignBonds}
                  text={
                    "Foreign Bonds " + filteredPortfolio[0]?.foreignBonds + "%"
                  }
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "teal",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "8px",
                  })}
                />
              </div>
            )}
            {filteredPortfolio[0]?.commodities !== 0 && (
              <div className="progress-bar">
                <CircularProgressbar
                  value={filteredPortfolio[0]?.commodities}
                  text={
                    "Commodities " + filteredPortfolio[0]?.commodities + "%"
                  }
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "teal",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "8px",
                  })}
                />
              </div>
            )}
            {filteredPortfolio[0]?.realEstate !== 0 && (
              <div className="progress-bar">
                <CircularProgressbar
                  value={filteredPortfolio[0]?.realEstate}
                  text={"Real Estate " + filteredPortfolio[0]?.realEstate + "%"}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "teal",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "8px",
                  })}
                />
              </div>
            )}
            {filteredPortfolio[0]?.tBills !== 0 && (
              <div className="progress-bar">
                <CircularProgressbar
                  value={filteredPortfolio[0]?.tBills}
                  text={filteredPortfolio[0]?.tBills + "%"}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "teal",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "8px",
                  })}
                />
              </div>
            )}
            {filteredPortfolio[0]?.alternatives !== 0 && (
              <div className="progress-bar">
                <CircularProgressbar
                  value={filteredPortfolio[0]?.alternatives}
                  text={filteredPortfolio[0]?.alternatives + "%"}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "teal",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "8px",
                  })}
                />
              </div>
            )}
          </div>
          <div className="zero-assets">
            {filteredPortfolio[0]?.alternatives === 0 && (
              <span>
                <span className="title">Alternatives:</span>
                {filteredPortfolio[0]?.alternatives + "%"}
              </span>
            )}
            {filteredPortfolio[0]?.tBills === 0 && (
              <span>
                <span className="title">T-Bills:</span>
                {filteredPortfolio[0]?.tBills + "%"}
              </span>
            )}
            {filteredPortfolio[0]?.realEstate === 0 && (
              <span>
                <span className="title">Real Estate:</span>
                {filteredPortfolio[0]?.realEstate + "%"}
              </span>
            )}
            {filteredPortfolio[0]?.commodities === 0 && (
              <span>
                <span className="title">Commodities:</span>
                {filteredPortfolio[0]?.commodities + "%"}
              </span>
            )}
            {filteredPortfolio[0]?.foreignBonds === 0 && (
              <span>
                <span className="title">Foreign Bonds:</span>
                {filteredPortfolio[0]?.foreignBonds + "%"}
              </span>
            )}
            {filteredPortfolio[0]?.nigerianBonds === 0 && (
              <span>
                <span className="title">Nigerian Bonds:</span>
                {filteredPortfolio[0]?.nigerianBonds + "%"}
              </span>
            )}
            {filteredPortfolio[0]?.emergingStocks === 0 && (
              <span>
                <span className="title">Emerging Stocks:</span>
                {filteredPortfolio[0]?.emergingStocks + "%"}
              </span>
            )}
            {filteredPortfolio[0]?.techStocks === 0 && (
              <span>
                <span className="title">Tech Stocks:</span>
                {filteredPortfolio[0]?.techStocks + "%"}
              </span>
            )}
            {filteredPortfolio[0]?.foreignStocks === 0 && (
              <span>
                <span className="title">Foreign Stocks:</span>
                {filteredPortfolio[0]?.foreignStocks + "%"}
              </span>
            )}
            {filteredPortfolio[0]?.nigerianStocks === 0 && (
              <span>
                <span className="title">Nigerian Stocks:</span>
                {filteredPortfolio[0]?.nigerianStocks + "%"}
              </span>
            )}
          </div>
          <div className="range">
            <div className="slider-value">
              <span
                style={{
                  left: `${sliderValue * 9.5}%`,
                  transform: `scale(${sliderVisibility})`,
                }}
              >
                {sliderValue}
              </span>
            </div>
            <div className="field">
              <div className="value-left">0</div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={sliderValue}
                onChange={(e) => handleSlider(e)}
                onMouseDown={() => setSliderVisibility(1)}
                onMouseUp={() => setSliderVisibility(0)}
              />
              <div className="value-right">10</div>
            </div>
          </div>
        </div>
        <div className="portfolio-text">
          <h1>
            Tell us your goals and
            <br />
            risk tolerance.
            <br />
            We'll do the rest.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
