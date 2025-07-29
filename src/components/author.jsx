import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../App.css';
import { BsHeartFill  } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-slate-300 px-16 py-10 font-mono">
      <div className="flex justify-between flex-wrap mb-8">
        <div className="flex flex-col gap-2">
          <div className="text-base flex items-center gap-1 text-white font-mono">
            <span className="code-icon">&lt;/&gt;</span>
            <span>Thanks for Viewing </span>
          </div>
          <div className="text-sm text-slate-400">
            Built with <BsHeartFill className="text-red-700 mx-1 hover:text-red-500 hover:scale-150 transition-transform duration-300"/>  by <b>Utkarsh Bhatt</b>, for developers
          </div>
        </div>

        <div className="text-right">
          <span className="connect-comment">// Connect with us</span>
          <div className="flex justify-end gap-4 mt-1.5">
            <a className="text-slate-300 text-lg transition-colors duration-300 hover:text-blue-400" href="#"><FaGithub /></a>
            <a className="text-slate-300 text-lg transition-colors duration-300 hover:text-blue-400" href="#"><FaTwitter /></a>
            <a className="text-slate-300 text-lg transition-colors duration-300 hover:text-blue-400" href="#"><FaLinkedin /></a>
            <a className="text-slate-300 text-lg transition-colors duration-300 hover:text-blue-400" href="#"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a] pt-5 flex flex-col items-center justify-between flex-wrap text-sm">
        <div className="flex gap-4 text-slate-300">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
          <span>•</span>
          <a href="#">Cookie Policy</a>
        </div>
        <div className="pt-5 font-mono text-slate-400">
          <code>while(coding) &#123; innovate(); &#125;</code>
        </div>
      </div>
    </footer>
  );
}
