import React from "react";
import exlogo from "../src/images/exlogo.svg";

const Header = () => {
  return (
    <div className="header" >
      <img src={exlogo} alt="extension-logo" />
      <div className="headers-feature">
        <p>Features</p>
        <p>How it works</p>
      </div>
      <button>Get Started</button>
    </div>
  );
};

export default Header;
