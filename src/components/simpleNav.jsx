import "../App.css";
import { PiCrown } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function SimpleNav() {
      const navigate = useNavigate();
    return (
        <div id="Nav-bar">
            <div id="logo" onClick={()=>navigate('/')} >
                <PiCrown id="pi" />
                <h2>Supreme Coding</h2>
            </div>
        </div>
    )
}