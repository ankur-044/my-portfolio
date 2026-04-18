import "./Projects.css"
import {FaEnvelope,FaMapMarkerAlt} from "react-icons/fa"

function Projects() {
  return (
    <section className="projects">
      <h1>My Projects</h1>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <h2>Resume Analyzer</h2>
          <p>
            AI-based resume analyzer using React, Node.js, and Machine Learning.
            It analyzes resumes and gives suggestions.
          </p>
          <div className="tech">
            <span>React</span>
            <span>Node</span>
            <span>ML</span>
          </div>
          <div className="buttons">
            <a href="#" target="_blank">Live</a>
            <a href="https://github.com/ankur-044/resume-analyzer" target="_blank">GitHub</a>
          </div>
        </div>

        

        {/* Project 3 */}
        <div className="project-card">
          <h2>Portfolio Website</h2>
          <p>
            Responsive personal portfolio built using React and CSS.
          </p>
          <div className="tech">
            <span>React</span>
            <span>CSS</span>
          </div>
          <div className="buttons">
            <a href="my-portfolio-omega-bay-32.vercel.app">Live</a>
            <a href="https://github.com/ankur-044/my-portfolio" target="blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;