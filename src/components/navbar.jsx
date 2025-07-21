import "../App.css";
import { FaCode, FaDatabase, FaBolt, FaProjectDiagram } from "react-icons/fa";
import { PiCrown } from "react-icons/pi";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom"; 

export default function Navbar() {
  const { user, loginWithRedirect , isAuthenticated  , logout} = useAuth0();
  const navigate = useNavigate() ; 
  return (
    <div id="Nav-bar">
      <div id="logo" onClick={() => navigate('/')} >
        <PiCrown id="pi" />
        <h2>Supreme Coding</h2>
      </div>
      <div id="nav-links">
        <div className="nav-item" onClick={() => navigate('/problems')}>
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
      {
        isAuthenticated ? 
        <button className="fancy-button"  style={{ fontSize: '14px' }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign-Out</button>:
        <button className="fancy-button" onClick={(e) => loginWithRedirect()}>Sign-In</button>
      }
      </div>
    </div>
  );
}
