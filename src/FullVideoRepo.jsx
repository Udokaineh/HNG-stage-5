import React from "react"
import RepoHeader from "./RepoHeader.jsx";
import VideoRepository from "./VideoRepository.jsx";
import LastWeekRepo from "./LastWeekRepo.jsx";


const FullVideoRepo = () => {
    return(
        <div>
            <RepoHeader />
            <VideoRepository />
            <LastWeekRepo />
        </div>
    )
}

export default FullVideoRepo;