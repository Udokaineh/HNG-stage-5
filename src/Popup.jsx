import React from "react";
import exlogo from "../src/images/exlogo.svg";
import settings from "../src/images/setting.svg";
import close from "../src/images/close.svg";
import monitor from "../src/images/monitor.svg";
import tab from "../src/images/tab.svg";
import camera from "../src/images/camera.svg";
import toggle from "../src/images/toggle.svg";
import microphone from "../src/images/microphone.svg";
import './App.css';

const Popup = () => {
  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div className="logo-icons">
          <img src={exlogo} alt="extension-logo" />
          <div className="set-close-div">
            <img src={settings} alt="setting-icon" />
            <img src={close} alt="close-icon" />
          </div>
        </div>
        <p>This extension helps you record and share help videos with ease.</p>
        <div className="monitor-tab-div">
          <div className="icon">
            <img src={monitor} alt="screen-icon" />
            <p>Full screen</p>
          </div>
          <div className="icon">
            <img src={tab} alt="tab-icon" />
            <p>Current Tab</p>
          </div>
        </div>
        <div className="toggle-div">
          <div className="icons">
            <img src={camera} alt="camera-icon" />
            <h4>Camera</h4>
          </div>
          <img src={toggle} alt="toggle" />
        </div>
        <div className="toggle-div">
          <div className="icons">
            <img src={microphone} alt="microphone-icon" />
            <h4>Audio</h4>
          </div>
          <img src={toggle} alt="toggle" />
        </div>
        <button className="popup-button">Start Recording</button>
      </div>
    </div>
  );
};

export default Popup;
