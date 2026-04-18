import "./Aboutus.css";
import { FaGraduationCap, FaSchool, FaBriefcase, FaTrophy, FaRocket } from "react-icons/fa";

function Aboutus() {
  return (
    <section className="about">
      <h1 className="about-title">About Me</h1>

      <div className="about-container">

        {/* Education */}
        <div className="about-card">
          <FaGraduationCap className="icon" />
          <h2>Education</h2>
          <p>
            I am currently pursuing B.Tech in Computer Science (AI/ML)
            from Brainware University, Kolkata.
            <br /><br />
            My academic focus is on building strong fundamentals in
            Data Structures, Web Development, and Machine Learning.
          </p>
        </div>

        {/* Schooling */}
        <div className="about-card">
          <FaSchool className="icon" />
          <h2>Schooling</h2>
          <p>
            Completed Higher Secondary Education in Science from
            Ramakrishna Mission.
            <br /><br />
            Developed discipline, logical thinking, and a strong
            problem-solving mindset during my school years.
          </p>
        </div>

        {/* Internship */}
        <div className="about-card">
          <FaBriefcase className="icon" />
          <h2>Internship</h2>
          <p>
            Worked as a Cloud & Web Development Intern at ICPES PRIVATE LIMITED.
            <br /><br />
            Gained hands-on experience in real-world projects,
            API integration, and scalable web application design.
          </p>
        </div>

        {/* Achievements */}
        <div className="about-card">
          <FaTrophy className="icon" />
          <h2>Achievements</h2>
          <p>
            Built multiple real-world projects including Resume Analyzer
            and a Video Calling App.
            <br /><br />
            Actively participated in hackathons and continuously improving
            problem-solving skills.
          </p>
        </div>

        {/* Future Goal */}
        <div className="about-card">
          <FaRocket className="icon" />
          <h2>Future Goal</h2>
          <p>
            My goal is to become a top software engineer in a
            product-based company.
            <br /><br />
            I am focused on mastering MERN stack, DSA, and AI/ML
            to build scalable and impactful products.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Aboutus;