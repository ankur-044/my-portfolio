import Navbar from "./Components/Navbar";
import Hero from "./pages/Hero";
import Aboutus from "./pages/Aboutus";
import Skills from "./pages/Skills";
import SoftSkills from "./pages/SoftSkills";
import Projects from "./pages/Projects";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <>
      <Navbar />

      <section id="home"><Hero /></section>
      <section id="about"><Aboutus /></section>
      <section id="skills"><Skills /></section>
      <section id="softskills"><SoftSkills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contactus /></section>
    </>
  );
}

export default App;
