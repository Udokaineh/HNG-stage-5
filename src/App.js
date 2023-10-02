import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./LandingPage.jsx"
import SignIn from "./SignIn.jsx"
import FullVideoRepo from "./FullVideoRepo.jsx"
import VideoView from "./VideoView.jsx";
import RecordReady from "./RecordReady.jsx"
import SendRecord from "./SendRecord.jsx"
import WebStore from "./WebStore.jsx"
import Overlay from "./Overlay.jsx"
import Popup from "./Popup.jsx";
import './App.css';



function App() {
    return (
      
        <Router>
            <div className="App">
                <Routes>
                <Route path="/" element={<LandingPage />} />
                    <Route path="SignIn" element={<SignIn />} />
                    <Route path="FullVideoRepo" element={<FullVideoRepo />} />
                    <Route path="VideoView" element={<VideoView />} />
                    <Route path="Overlay" element={<Overlay />} />
                    <Route path="/SendRecord" element={<SendRecord />} />
                    <Route path="/RecordReady" element={<RecordReady />} />
                    <Route path="/WebStore" element={<WebStore />} />
                    <Route path="/Popup" exact element={<Popup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
