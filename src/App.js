import React from "react"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Popup from "./Popup.jsx";
import './App.css';


function App() {
    return (
        <div className="App">
           <Popup />
        </div>
        // <Router>
        //     <div className="App">
        //         <Routes>
        //             <Route path="/Popup" exact element={<Popup />} />
        //         </Routes>
        //     </div>
        // </Router>
    );
}

export default App;
