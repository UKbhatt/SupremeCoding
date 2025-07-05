import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../App.css';
import { BsHeartFill  } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="code-icon">&lt;/&gt;</span>
            <span>Thanks for Viewing </span>
          </div>
          <div className="footer-credits">
            Built with <BsHeartFill className='heart'/>  by <b>Utkarsh Bhatt</b>, for developers
          </div>
        </div>

        <div className="footer-right">
          <span className="connect-comment">// Connect with us</span>
          <div className="social-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="policy-links">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
          <span>•</span>
          <a href="#">Cookie Policy</a>
        </div>
        <div className="code-line">
          <code>while(coding) &#123; innovate(); &#125;</code>
        </div>
      </div>
    </footer>
  );
}
