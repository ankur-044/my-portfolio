import "./Contactus.css"



function Contactus(){
    return (
        <section className="contact">
            <div className="contact-container">
                <h1>Contact Me</h1>
                <p>Feel free to reach out</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="text" placeholder="Your Email" required />
                    <textarea type="text" placeholder="Your Name" required ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>

    )
}

export default Contactus;