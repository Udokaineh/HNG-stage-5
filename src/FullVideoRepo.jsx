import React from "react";
import RepoHeader from "./RepoHeader.jsx";
import VideoRepository from "./VideoRepository.jsx";
import LastWeekRepo from "./LastWeekRepo.jsx";
import {Link} from "react-router-dom"

const FullVideoRepo = () => {
  return (
    <div className="fullvideorepo-div">
      <RepoHeader />
      <VideoRepository />
      <LastWeekRepo />
      <Link to="/SignIn">
        <button className="signout">Sign Out</button>
      </Link>
    </div>
  );
};

export default FullVideoRepo;
