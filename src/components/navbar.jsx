import "../App.css";
import { FaCode, FaDatabase, FaBolt, FaProjectDiagram } from "react-icons/fa";
import { PiCrown } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/SignUp');
  };
  // const navigate = useNavigate();
  return (
    <div id="Nav-bar">
      <div id="logo" onClick={() => navigate('/')} >
        <PiCrown id="pi" />
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
        <button className="fancy-button" onClick={handleClick}>Sign-In</button>
      </div>
    </div>
  );
}
