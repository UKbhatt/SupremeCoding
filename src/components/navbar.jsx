import "../App.css" ; 
import { FaCode, FaDatabase, FaBolt, FaProjectDiagram } from "react-icons/fa";
import { PiCrown } from "react-icons/pi";

export default function Navbar() {
  return (
    <div id="Nav-bar">
      <div id="logo">
        <PiCrown id="pi"/>
        <h2>Supreme Coding</h2>
      </div>
      <div id="nav-links">
        <div className="nav-item">
          <FaCode />
          <span>Problems</span>
        </div>
        <div className="nav-item">
          <FaDatabase />
          <span>Sheet</span>
        </div>
        <div className="nav-item">
          <FaBolt />
          <span>Contests</span>
        </div>
        <div className="nav-item">
          <FaProjectDiagram />
          <span>Discussion</span>
        </div>
      </div>
      <div className="app-container">
      <button className="fancy-button">Sign-In</button>
    </div>
    </div>
  );
}
