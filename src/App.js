import React from "react"
import LandingPage from "./LandingPage.jsx"
import SignIn from "./SignIn.jsx"
import VideoRepository from "./VideoRepository.jsx";
import RepoHeader from "./RepoHeader.jsx";
import LastWeekRepo from "./LastWeekRepo.jsx";
import VideoView from "./VideoView.jsx";
import Popup from "./Popup.jsx";
import RecordingButton from "./RecordingButton.jsx"
import Overlay from "./Overlay.jsx"
import RecordReady from "./RecordReady.jsx"
import SendRecord from "./SendRecord.jsx"
import './App.css';


function App() {
    return (
        <div className="App">
            <LandingPage />
            <SignIn />
            <RepoHeader />
            <VideoRepository />
            <LastWeekRepo />
            <VideoView />
            <RecordingButton />
            <Overlay />
            <SendRecord />
            <RecordReady />
            <Popup />
        </div>
    );
}

export default App;
