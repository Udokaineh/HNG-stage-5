import React from "react"
import LandingPage from "./LandingPage.jsx"
import SignIn from "./SignIn.jsx"
import './App.css';
import VideoRepository from "./VideoRepository.jsx";
import RepoHeader from "./RepoHeader.jsx";
import LastWeekRepo from "./LastWeekRepo.jsx";
import VideoView from "./VideoView.jsx";
import Popup from "./Popup.jsx";


function App() {
    return (
        <div className="App">
            <LandingPage />
            <SignIn />
            <RepoHeader />
            <VideoRepository />
            <LastWeekRepo />
            <VideoView />
            <Popup />
        </div>
    );
}

export default App;
