import "./Contactus.css";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contactus() {

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <section className="contact" id="contact">
      
      <div className="contact-container">

        {/* LEFT SIDE - FORM */}
        <form className="contact-form">
          <h1>Contact Me</h1>
          <p>Feel free to reach out</p>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* RIGHT SIDE - INFO */}
        <div className="contact-info">
          <h2>Ankur Biswas</h2>
          <p>
            Aspiring Full Stack Developer focused on MERN and AI/ML.
            Building scalable applications and continuously learning.
          </p>

          <p><FaEnvelope /> biswasankur502@gmail.com</p>
          <p><FaMapMarkerAlt /> Kolkata, India</p>
        </div>

      </div>

      {/* FOOTER */}
      <div className="footer-section">

      <div className="footer-box">
  <h3>Quick Links</h3>
  <ul>
    <li onClick={() => scrollToSection("about")}>About</li>
    <li onClick={() => scrollToSection("projects")}>Projects</li>
    <li onClick={() => scrollToSection("skills")}>Skills</li>
    <li onClick={() => scrollToSection("contact")}>Contact</li>
  </ul>
</div>

<div className="footer-box">
  <h3>Resources</h3>
  <ul>
    <li>
      <a href="https://github.com/ankur-044" target="_blank">GitHub</a>
    </li>
    <li>
      <a href="https://linkedin.com/in/Ankur Biswas" target="_blank">LinkedIn</a>
    </li>
    <li>
      <a href="/resume.pdf" target="_blank">Resume</a>
    </li>
  </ul>
</div>

      </div>

      <p className="copyright">
        © 2026 Ankur Biswas. Built with ❤️ using React.
      </p>

    </section>
  );
}

export default Contactus;