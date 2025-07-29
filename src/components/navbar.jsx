import { FaCode, FaDatabase, FaBolt, FaProjectDiagram } from "react-icons/fa";
import { PiCrown } from "react-icons/pi";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { MdOutlinePerson } from "react-icons/md";
import "../App.css";

export default function Navbar() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="w-full h-[90px] bg-[#1a1a1a] flex flex-row items-center px-5 shadow-[0_2px_4px_rgba(0,0,0,0.2)] gap-[20%]">
      
      <div onClick={() => navigate('/')} className="flex flex-row items-center gap-[5px] cursor-pointer">
        <PiCrown className="w-10 h-10 fill-yellow-400 hover:scale-150 transition-transform duration-300 ease-in-out" />
        <h2 className="text-xl font-bold">Supreme Coding</h2>
      </div>

      <div className="flex flex-wrap flex-row items-center text-lg text-slate-200 cursor-pointer transition-colors duration-200 gap-15">
        <div className="flex items-center gap-2 hover:text-orange-400" onClick={
          isAuthenticated ? () => navigate('/problems') : () => loginWithRedirect()}>
          <FaCode />
          <span>Problems</span>
        </div>
        <div className="flex items-center gap-2 hover:text-orange-400" onClick={
          isAuthenticated ? () => navigate('/sheets') : () => loginWithRedirect()}>
          <FaDatabase />
          <span>Sheet</span>
        </div>
        <div className="flex items-center gap-2 hover:text-orange-400" onClick={
          isAuthenticated ? () => navigate('/contest') : () => loginWithRedirect()}>
          <FaBolt />
          <span>Contests</span>
        </div>
        <div className="flex items-center gap-2 hover:text-orange-400" onClick={
          isAuthenticated ? () => navigate('/discussion') : () => loginWithRedirect()}>
          <FaProjectDiagram />
          <span>Discussion</span>
        </div>
      </div>

      <div className="ml-auto">
        {
          isAuthenticated ? (
            <div
              role="button"
              tabIndex={0}
              onClick={() => { console.log("clicked") }}
              className="w-12 h-10 cursor-pointer justify-center flex rounded-full bg-gradient-to-r from-black to-gray-500 hover:from-gray-950 hover:to-gray-700 text-white p-2 shadow-md transition duration-300"
              style={{ fontSize: '20px' }}
            >
              <MdOutlinePerson className="text-white" />
            </div>
          ) : (
            <button
              className="px-6 py-3 rounded-full bg-gradient-to-tr from-black to-gray-500 text-white text-base font-semibold cursor-pointer shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl"
              onClick={() => loginWithRedirect()}
            >
              Sign-In
            </button>
          )
        }
      </div>
    </div>
  );
}
