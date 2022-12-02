import React from "react";
import "./bottom.scss";
import Sleeping from "../../assets/sleeping.jpg";

function Bottom() {
  return (
    <div className="bottom-container">
      <div className="bottom-wrapper">
        <div className="bottom-text">
          <h1>
            Automation <br /> gives you a <br /> better return on <br /> your
            time.
          </h1>
          <p>
            Keep your eyes on the big picture, your other investments, or
            basically anything besides the busywork. We rebalance your
            portfolio, automatically diversify deposits, and can help save you
            taxes, all without you ever lifting a finger.
          </p>
        </div>
        <div className="bottom-image">
          <img src={Sleeping} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Bottom;
