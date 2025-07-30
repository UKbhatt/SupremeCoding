import "../App.css";
import { PiCrown } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function SimpleNav() {
      const navigate = useNavigate();
    return (
        <div className="w-full h-20 bg-[#1a1a1a] flex flex-wrap flex-row px-5 shadow-[0_2px_4px_rgba(0,0,0,0.2)] text-white ">
            <div  onClick={()=>navigate('/')} className="flex flex-row items-center gap-[5px] cursor-pointer" >
                <PiCrown className="w-10 h-10 fill-yellow-400 hover:scale-150 transition-transform duration-300 ease-in-out"/>
                <h2  className="text-xl font-bold">Supreme Coding</h2>
            </div>
        </div>
    )
}