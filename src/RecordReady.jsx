import React from "react";
import Header from "./Header.jsx";
import edit from "../src/images/edit.svg";

const RecordReady = () => {
  return (
    <div className="Ready-div">
      <Header />
      <div className="ready">
        <h2>Your video is ready!</h2>
        <p>Name</p>
        <h4>Untitled_Video_20232509 </h4>
        <img src={edit} alt="edit-icon" />
        <input
          className="input1"
          type="text"
          placeholder="enter email of receiver"
        />
      </div>
    </div>
  );
};

export default RecordReady;
