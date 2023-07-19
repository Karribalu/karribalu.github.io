import { Link, animateScroll as scroll } from "react-scroll";
import { useState,useEffect } from "react";
import logo from "../../assets/logo-white.svg"
import {toggleDarkButton, toggleLightButton, logoColor} from "../../icons";
import {RxHamburgerMenu, RxCross1} from "react-icons/rx";
import "./NavBar.css"
const NavBar = (props) => {
    const {mode,onToggle, hamActive, setHamActive, skillsDiv, setSkillsDiv, careerDiv, setCareerDiv,experienceDiv, setExperienceDiv, projectsDiv, setProjectsDiv} = props;
    const [siderBarDivName, setSideBarDivName] = useState("sidebar");
    useEffect(()=>{
        siderBarDivName === "sidebar" ? setSideBarDivName("sidebar-active") : setSideBarDivName("sidebar");
    },[hamActive]);
    const scrollToTop = () => {
        scroll.scrollToTop();
        };
    const skillsClickActive = () => {
        setSkillsDiv(!skillsDiv);
        setHamActive(!hamActive);
    }
    const careerClickActive = () => {
        setCareerDiv(!careerDiv);
        setHamActive(!hamActive);
    }
    const experienceClickActive = () => {
        setExperienceDiv(!experienceDiv);
        setHamActive(!hamActive);
    }
    const projectsClickActive = () => {
        setProjectsDiv(!projectsDiv);
        setHamActive(!hamActive);
    }
    return (
    <div className="navbar">
        <nav className={!mode ? "navbar-light": "navbar-dark"}>
        
        <RxHamburgerMenu className="hamburger" onClick={()=>setHamActive(!hamActive)}/>
        
        {!mode ? 
        <img src = {logo} onClick = {scrollToTop}alt="logo" className="logo"/>
        :
        <img src = {logoColor} onClick = {scrollToTop} alt="logo" className="logo"/>
        }
        <div className="nav-links">
            <Link to="career"
            activeClass="navbar-active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-link">
            Career
            </Link>
            <Link to="skills" 
            activeClass="navbar-active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-link">
                Skills
            </Link>
            <Link to="experience" 
            activeClass="navbar-active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-link">
                Experience
            </Link>
            <Link to="projects" 
            activeClass="navbar-active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}

            className="nav-link">
                Projects</Link>
            <Link to="footer" 
            activeClass="navbar-active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-link">Contact</Link>
        </div>
        {!mode?
        <img src={toggleDarkButton} alt="toggle dark" className="toggle" onClick={onToggle}/>
        :
        <img src={toggleLightButton} alt="toggle light" className="toggle" onClick={onToggle}/>
        }   
        </nav>
        <div className={hamActive? "sidebar-active" : "sidebar"}>
            <div className="sidebar-header">
                Menu
                <RxCross1 className="cross" onClick={()=>setHamActive(!hamActive)}/>
            </div>
            <div className={mode? "nav-line-light" : "nav-line-dark"}></div>
            <div className="sidebar-links">
            <Link to="Career" className="nav-link" onClick={careerClickActive}>Career</Link>
            <Link to="skills" className="nav-link" onClick={skillsClickActive}>Skills</Link>
            <Link to="experience" className="nav-link" onClick={experienceClickActive}>Experience</Link>
            <Link to="projects" className="nav-link" onClick={projectsClickActive}>Projects</Link>
             </div>
        </div>

        <div className={mode? "nav-line-light" : "nav-line-dark"}></div>
    </div> 
    );
}
 
export default NavBar;