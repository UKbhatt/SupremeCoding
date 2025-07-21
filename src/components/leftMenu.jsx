import { FaCode, FaDatabase, FaBolt, FaProjectDiagram } from "react-icons/fa";
import "../App.css";

export default function LeftMenu() {
    return (
        <div className="Left-menu">
            <div div className="left-menu-item">
                <FaCode />
                Problems
            </div>
            <div div className="left-menu-item">
                <FaDatabase />
                Sheet
            </div>
            <div div className="left-menu-item">
                <FaBolt />
                Contest
            </div>
            <div div className="left-menu-item">
                <FaProjectDiagram />
                Discussion
            </div>

        </div>
    )
}