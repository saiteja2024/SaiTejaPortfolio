// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/contact.css";

// IMPORT ICONS
import LinkedinIcon from "../assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";
// import InstagramIcon from "../assets/icons/instagram";

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="contact-intro">
        <p className="contact-details">Drop me a note on:</p>
        <div className="contact-emails">
          <a
              href="mailto:saitejaejjigiri@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-email"
          >
            Email - saitejaejjigiri@gmail.com
          </a>

          <a
              href="https://www.linkedin.com/in/saiteja-ejjigiri-957816254/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-email"
          >
            LinkedIn - Sai Teja Ejjigiri
          </a>

        </div>
      </div>

      <div className="contact-icons-wrapper">
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com/in/saiteja-ejjigiri-957816254/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="contact-icons linkedin"/>
            </a>
          </li>

          <li>
            <a 
              href="https://github.com/SaiTejaEjjigiri" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GithubIcon className="contact-icons github"/>
            </a>
          </li>

          {/* <li>
            <a 
              href="https://github.com/SaiTejaEjjigiri/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <InstagramIcon className="contact-icons instagram"/>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Contact;