// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/home.css";

// IMPORT IMAGES
import akImage from '../assets/images/Sai.jpeg';

// IMPORT ICONS
import LinkedinIcon from "../assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";
import EmailIcon from "../assets/icons/email";
// import InstagramIcon from "../assets/icons/instagram";

const Home = () => {
  return (
    <div className="home-container">
      <img 
        src={akImage} 
        className="home-img"
        alt=""
      ></img>

      <div className="home-intro">
        <p className="home-university">Hello World!</p>
        <p className="home-name">I am Sai Teja </p>
        <p className="home-university">Ex - Senior Software Engineer @ Albertsons
        {/* <br></br>  
        <br></br>  */}
        </p>
        <p className="home-address">Perth Amboy, New Jersey, USA</p>
      </div>

      <div className="home-icons-wrapper">
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com/in/saiteja-ejjigiri-957816254//" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="home-icons linkedin"/>
            </a>
          </li>

          <li>
            <a 
              href="https://github.com/SaiTejaEjjigiri" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GithubIcon className="home-icons github"/>
            </a>
          </li>

          {/* <li>
            <a 
              href="https://www.instagram.com/sai_teja_e/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <InstagramIcon className="home-icons instagram"/>
            </a>
          </li> */}

          <li>
            <a 
              href="mailto:saitejaejjigiri@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <EmailIcon className="home-icons email"/>
            </a>
          </li>
        </ul>
      </div>

      <div className="download-section">
            <a                 
            href="/resume.pdf"
            className="resume-download"
            >
            Download CV
            </a>
        </div> 
    </div>
  );
}

export default Home;