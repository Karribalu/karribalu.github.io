import { Link } from "react-scroll";
import logo from "../../assets/logo-white.svg"
import {toggleDarkButton, toggleLightButton, logoColor} from "../../icons";

import "./NavBar.css"
const NavBar = ({mode,onToggle}) => {

    return (
    <div>
        <nav className={!mode ? "navbar-light": "navbar-dark"}>
        {!mode ? 
        <img src = {logo} alt="logo" className="logo"/>
        :
        <img src = {logoColor} alt="logo" className="logo"/>
}
        <div className="nav-links">
            <Link to="skills" className="nav-link">Skills</Link>
            <Link to="experience" className="nav-link">Experience</Link>
            <Link to="projects" className="nav-link">Projects</Link>
            <Link to="contact" className="nav-link">Contact</Link>
        </div>
        {!mode?
        <img src={toggleDarkButton} alt="toggle dark" className="toggle" onClick={onToggle}/>
        :
        <img src={toggleLightButton} alt="toggle light" className="toggle" onClick={onToggle}/>
        }   
        </nav>
        <div className="nav-line"></div>
    </div> 
    );
}
 
export default NavBar;