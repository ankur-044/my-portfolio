import "./Aboutus.css"

function Aboutus(){
    return (
        <section className="about">
            <div className="about-container">
            <div className="about-left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsjemrQJ1aY8GXzDH7zyW2PeSr0NoRlUL0Q&s" alt="" />
                </div>


            <div className="about-right">
                <h1>ANKUR BISWAS</h1>
                <h3>SOFTWARE ENGINNER INTERN AT ICPES</h3>
                <p>I AM CREATING RESPONSIVE APPLICATION  USING MERN/PYTHON AND ALSO BUILDS ML MODELS USING PYTHON LIBRARIES</p>

                
            <div className="skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                </div>    

                <div className="buttons">
                    <button>Download CV</button>
                    <button>Contact Me</button>
                </div>
                </div>

            </div>
            
        </section>

    )
}

export default Aboutus;