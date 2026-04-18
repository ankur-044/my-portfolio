import "./SoftSkills.css";
import { FaUsers, FaComments, FaLightbulb, FaClock } from "react-icons/fa";

function SoftSkills() {
  return (
    <section className="softskills">

      <h1 className="title">Soft Skills</h1>

      {/* SKILLS GRID */}
      <div className="skills-grid">

        <div className="skill-card">
          <FaUsers className="icon" />
          <h3>Teamwork</h3>
          <p>I collaborate effectively with teams to build scalable projects.</p>
        </div>

        <div className="skill-card">
          <FaComments className="icon" />
          <h3>Communication</h3>
          <p>Clear communication of ideas and problem-solving approaches.</p>
        </div>

        <div className="skill-card">
          <FaLightbulb className="icon" />
          <h3>Problem Solving</h3>
          <p>Strong analytical thinking and debugging skills.</p>
        </div>

        <div className="skill-card">
          <FaClock className="icon" />
          <h3>Time Management</h3>
          <p>Efficient in managing tasks and meeting deadlines.</p>
        </div>

      </div>

     

    </section>
  );
}

export default SoftSkills;