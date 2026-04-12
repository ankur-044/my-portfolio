import { Link } from "react-router-dom";
import "../pages/Navbar.css"


function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <img src="https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!w700wp" alt="logo" />
            </div>
            <div className="links">
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
            </div>
            
        </nav>

    )
}

export default Navbar;