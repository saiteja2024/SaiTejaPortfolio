// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
        <div className="download-section">
            <a                 
            href="/resume.pdf"
            className="resume-download"
            >
            Download CV
            </a>
        </div> 

      <div className="timeline-section resume-experience">
        <div className="heading-section">
          <div className="heading">EXPERIENCE</div>
        </div>

        <div className="timeline-container">
          <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
            <div className="list-progress">
              <div className="inner">
              </div>
            </div>

            <li className="resume-item active">
              <div className="title">
                <a
                  href="https://www.linkedin.com/company/albertsons/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                    Albertsons, CA, USA
                </a>
              </div>

              <div className="sub-title">
              Senior Software Engineer
              </div>

              <div className="sub-sub-title">April 2023 - Present</div>

              <div className="content">
                <p><b>Skills</b>: (Java8, Spring, Kubernetes, Cloud, Controllers, Distributed Systems)</p>
                <p> - Engineering backend services at Albertson Product Catalog Systems </p>
                <p> - Involved in developing Batch processors for data streaming using Apache Spark</p>
                <p> - Worked on Junit code coverage for writing test cases for Batch and Stream processors</p>
                <p></p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.linkedin.com/company/att/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                    AT&T, New Jersey, USA
                </a>
              </div>

              <div className="sub-title">
              Software Engineer
              </div>

              <div className="sub-sub-title">May 2019 - September 2022</div>

              <div className="content">
                <p><b>Skills</b>: (Java, Web Application, Azure, AKS, Spring, Cassandra, Kafka, MongoDB)</p>
                <p> - Engineered production-ready microservice to operate the flow of AT&T Service now transformation </p>
                <p> -  Involved in SDLC Requirements gathering, Analysis, Design, Development and Testing of
                      application using AGILE methodology (SCRUM)</p>
                <p> - Involved in deployments uisng AKS(Azure Kuberenetes Service)</p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.linkedin.com/company/siemens/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                    Siemens, Bangalore, India
                </a>
              </div>

              <div className="sub-title">
              Software Engineer
              </div>

              <div className="sub-sub-title">October 2026 - Aril 2019</div>

              <div className="content">
                <p><b>Skills</b>: (Java, Cassandra, Mysql, Postman APIs, Microsoft Azure, Kafka)</p>
                <p> - Worked on Postal Automation</p>
                <p> - Spearheaded personalized banner support in emails. W+ membership, App download, and Easter banners reported ~95% CTR </p>
                <p> - Implemented and deployed pipelines that pushed TBs of data to Cassandra and cache nodes </p>
                <p> - Implenetes Spring's AOP to implement logging and getting data source objects as the advice that was
                      in the bean classes.</p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              {/* <div className="title">
                <a
                  href="https://tech.walmart.com/content/walmart-global-tech/en_us.html"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                    Walmart Global Tech, Bangalore, India
                </a>
              </div> */}

              <div className="sub-title">
              Internship in Cisco Systems, Inc
              </div>

              <div className="sub-sub-title">August 2016 - October 2016</div>

              <div className="content">
                <p><b>Skills</b>:  (Linux, Internet Protocol Suite (TCP/IP), Cisco Routers, Cisco Packet Tracer.)</p>
                <p> - The internship project is focused on utilizing Cisco Packet Tracer to design and simulate various network
                      scenarios for educational and research purposes </p>
                <p> - Designed and simulated real-world network topologies, configured routers, switches, and
                      other network devices, and tested and troubleshooted the simulated networks.  </p>
              </div>
              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="timeline-section resume-education">
        <div className="heading-section">
          <div className="heading">EDUCATION</div>
        </div>

        <div className="timeline-container">
          <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
            <div className="list-progress">
              <div className="inner">
              </div>
            </div>

            {/* <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.murraystate.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Murray State University, Kentucky, USA
                </a>
              </div>

              <div className="sub-title">Master of Science,{" "}
                <a
                  href="https://www.murraystate.edu/academics/CollegesDepartments/CollegeOfBusiness/Programs/cybersecurity/index.aspx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Informations Systems
                </a>
              </div>

              <div className="sub-sub-title">August 2017 - May 2019</div>
              <div className="content">
                <p><b>CGPA</b>: 3.45/4.0</p>
                <p>- Graduate Assistant - University Libraries</p>
              </div>
              <div className="pointer"></div>
            </li> */}

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.lpu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Lovely Professional University, Punjab, India
                </a>
              </div>

              <div className="sub-title">Bachelor of Technology,{" "}
                <a
                  href="https://www.bitmesra.ac.in/Show_Department_Section?cid=1&deptid=70" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Electronics and Communication Engineering (Honours)
                </a>
              </div>

              <div className="sub-sub-title">July 2012 - July 2016</div>
              <div className="content">
                <p><b>CGPA</b>: 7.0/9.0</p>
                <p>- Published Capstone Project in Photonics related to Laser beams </p>
                <p>- Worked on Microprocessor, Matlab and EMFT(Electronics and Magnetic Field Theory) labs</p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                  NRI Junior Academy, Hyderabad, India
              </div>

              <div className="sub-title">Higher Secondary school
              </div>

              <div className="sub-sub-title">March 2010 - May 2012</div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                  Kakatiya E-Techno School, Karimanagar, India
              </div>

              <div className="sub-title">Matriculation{" "}
              </div>

              <div className="sub-sub-title">March 2000 - May 2010</div>
              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;