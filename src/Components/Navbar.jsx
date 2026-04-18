import "../pages/Navbar.css";
import logo from "../Components/img.jpeg"

function Navbar() {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="links">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About us</button>
        <button onClick={() => scrollToSection("skills")}>Skills</button>
        <button onClick={() => scrollToSection("softskills")}>More</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("contact")}>Contact us</button>
      </div>

    </nav>
  );
}

export default Navbar;