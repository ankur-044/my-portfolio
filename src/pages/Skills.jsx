import "./Skills.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGithub, FaDocker
} from "react-icons/fa";
import { SiMongodb, SiFirebase, SiSass } from "react-icons/si";

function Skills() {
  return (
    <section className="skills-section">

      <h2>What I do</h2>
      <p className="subtitle">
        I build modern web applications using MERN stack and AI tools.
      </p>

      <div className="skills-card">

        <div className="skills-grid">
          <div className="skill"><FaHtml5 /> <p>HTML</p></div>
          <div className="skill"><FaCss3Alt /> <p>CSS</p></div>
          <div className="skill"><SiSass /> <p>SASS</p></div>
          <div className="skill"><FaJs /> <p>JavaScript</p></div>
          <div className="skill"><FaReact /> <p>React</p></div>
          <div className="skill"><FaGithub /> <p>GitHub</p></div>
          <div className="skill"><FaNodeJs /> <p>Node.js</p></div>
          <div className="skill"><SiFirebase /> <p>Firebase</p></div>
          <div className="skill"><SiMongodb /> <p>MongoDB</p></div>
          <div className="skill"><FaDocker /> <p>Docker</p></div>
        </div>

      </div>
    </section>
  );
}

export default Skills;