import { FaCode, FaDatabase, FaBolt, FaProjectDiagram } from "react-icons/fa";
import { PiCrown } from "react-icons/pi";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { MdOutlinePerson } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FileJson2 } from 'lucide-react';
import { useState } from "react";
import "../App.css";

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      loginWithRedirect();
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full h-20 bg-[#1a1a1a] px-5 py-4 shadow-md ">
      <div className="flex justify-between items-center">
        <div onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
          <PiCrown className="w-8 h-8 md:w-10 md:h-10 fill-yellow-400 hover:scale-125 transition-transform duration-300 ease-in-out" />
          <h2 className="text-lg md:text-2xl font-bold text-white">Supreme Coding</h2>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-200 text-base">
          <div className="flex items-center gap-2 hover:text-orange-400 cursor-pointer" onClick={() => handleNavClick('/problems')}>
            <FaCode />
            <span className="text-xl">Problems</span>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-400 cursor-pointer" onClick={() => handleNavClick('/sheets')}>
            <FaDatabase />
            <span className="text-xl">Sheet</span>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-400 cursor-pointer" onClick={() => navigate('/roomlogin')}>
            <FileJson2 />
            <span className="text-xl">Real-Time Code Editor</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div
              role="button"
              tabIndex={0}
              onClick={() => console.log("clicked")}
              className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-r from-black to-gray-500 hover:from-gray-900 hover:to-gray-700 text-white p-2 shadow-md transition duration-300"
            >
              <MdOutlinePerson className="text-white text-lg" />
            </div>
          ) : (
            <button
              className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-tr from-black to-gray-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
              onClick={() => loginWithRedirect()}
            >
              Sign-In
            </button>
          )}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[#1f1f1f] p-4 rounded-lg text-white text-base shadow-lg">
          <div className="flex items-center gap-2 hover:text-orange-400 cursor-pointer" onClick={() => handleNavClick('/problems')}>
            <FaCode />
            <span>Problems</span>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-400 cursor-pointer" onClick={() => handleNavClick('/sheets')}>
            <FaDatabase />
            <span>Sheet</span>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-400 cursor-pointer" onClick={() => navigate('/roomlogin')}>
            <FileJson2 />
            <span>Real-Time Code Editor</span>
          </div>
          {!isAuthenticated && (
            <button
              className="w-full mt-2 px-4 py-2 bg-gradient-to-tr from-black to-gray-500 rounded-full text-white font-semibold"
              onClick={() => loginWithRedirect()}
            >
              Sign-In
            </button>
          )}
        </div>
      )}
    </div>
  );
}
