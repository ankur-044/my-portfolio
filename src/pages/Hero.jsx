import "./Hero.css"
import Typewriter from "typewriter-effect"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {SiLeetcode} from "react-icons/si"
import myImage from "../Components/img.jpeg"



function Hero() {

  const scrollToSection= (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({behavior:"smooth"})
      }
    };
  return (
    <>

    
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">
        <p className="hello">Hello</p>

        <h1 className="gradient-text">
          <Typewriter
            options={{
              strings: ["Ankur Biswas"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <h2>
          I build scalable web applications and AI-powered solutions using MERN & Python.
        </h2>

        <p className="desc">
          Crafting modern web applications using React, Node.js and AI/ML.
        </p>

        <div className="hero-buttons">
          <button onClick={()=>{
            scrollToSection("projects")
          }}>View My Work</button>
          <button className="outline" onClick={()=>{
             scrollToSection("contact")
          }}>Contact Me</button>
        </div>

        <div className="stats">
          <div>
            <h3>2</h3>
            <p>Projects</p>
          </div>
          <div>
            <h3>2+</h3>
            <p>Languages</p>
          </div>
          <div>
            <h3>1</h3>
            <p>Internship</p>
          </div>
        </div>

        <div className="socials">
          <a href="https://github.com/ankur-044" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ankurbiswas" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/ankur_044" target="blank">
            <SiLeetcode size={30} color="#FFA116" />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <img src={myImage} alt="Ankur" className="image" />
      </div>
</section>





    </>

  )
}

export default Hero