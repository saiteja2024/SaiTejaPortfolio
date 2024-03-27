import React from "react";

import "../styles/about.css";

import LinkedInRecos from './linkedinrecos';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <p className="about-details">
        Greetings! I am a dedicated software engineer currently contributing my skills and expertise at Albertsons, a leading name in the tech industry. With a career journey spanning several esteemed organizations including AT&T, Siemens, and Cisco Systems, where I embarked on a transformative internship in 2016, I have continually immersed myself in the dynamic realm of technology. 
         </p>
         <p className="about-details">
         My expertise lies in Java programming language, where I've leveraged the power of Spring framework to develop robust and efficient applications. Additionally, my experience extends to cloud technologies, particularly Azure, where I've led initiatives to migrate applications, implement cloud-native solutions, and optimize performance and cost-efficiency.         </p>
         <p className="about-details">
         Driven by a passion for innovation and problem-solving, I thrive in environments where challenges abound, consistently delivering efficient solutions that drive organizational growth and efficiency. Beyond the realm of technology, I find joy in maintaining an active lifestyle through workouts and seek solace in the rhythm of music.
         </p>
         <p className="about-details">
         Furthermore, I cherish the opportunity to forge meaningful connections and expand my network. If you share a similar passion for technology or simply wish to connect, I invite you to reach out to me on LinkedIn. Let's connect, collaborate, and explore the possibilities together!
         </p>

        <p className="about-details">
         I am always excited to meet new people and make friends. Feel free to drop me a note on LinkedIn.
        </p>
      </div>
    </div>
  );
}

export default About;