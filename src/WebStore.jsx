import React from "react";
import exlogo from "../src/images/exlogo.svg";
import verify from "../src/images/verify.svg";
import medal from "../src/images/medal.svg";
import star from "../src/images/Star.svg";
import info from "../src/images/info-circle.svg";
import divider from "../src/images/divider.svg";
import dashboard from "../src/images/dashboard.svg";

const WebStore = () => {
  return (
    <div className="webstore-div">
      <div className="webstore-header">
        <div className="left-btn-div">
          <div className="web-left-div">
            <img src={exlogo} alt="extension-logo" />
            <div className="veri-medal-div">
              <div className="icoon">
                <img src={verify} alt="verify-icon" />
                <p>Helpmeout.com</p>
              </div>
              <div className="icoon">
                <img src={medal} alt="medal-icon" />
                <p>Featured</p>
              </div>
            </div>
            <div className="star-line-div">
              <div className="star-icons">
                <img src={star} alt="star-icon" />
                <img src={star} alt="star-icon" />
                <img src={star} alt="star-icon" />
                <img src={star} alt="star-icon" />
                <img src={star} alt="star-icon" />
              </div>
              <p>252</p>
              <img src={info} alt="info-icon" />
              <img src={divider} alt="divider-icon" />
              <p className="prod">Productivity</p>
              <img src={divider} alt="divider-icon" />
              <p>80,000+ users</p>
            </div>
          </div>
          <button className="chrome-btn">Add to Chrome</button>
        </div>
        <div className="hr"></div>
        <div className="webstore-links">
          <a href="#Overview" className="overview">
            Overview
          </a>
          <a href="#Privacy">Privacy practices</a>
          <a href="#Review">Review</a>
          <a href="#Related">Related</a>
        </div>
      </div>
      <div className="dashboard-div">
        <img className="dashbaord" src={dashboard} alt="dashboard-pic" />
      </div>
    </div>
  );
};

export default WebStore;
