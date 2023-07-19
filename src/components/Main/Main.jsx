
import {linkedin, github, twitter, mail} from "../../icons";
import {linkedinLight, githubLight, twitterLight, mailLight} from "../../icons";
import "./Main.css";
import { heroImage } from "../../icons";
import heroImageLight from "../../assets/hero-image-fixed-light.svg";
import { saveAs } from "file-saver";
import resume from "../../assets/Bala_Subramanyam_Resume.pdf";
const Main = ({mode}) =>{ 

    const socialDarkStyle = {
        color: "#fff",
        fontSize:"30px",
        hover:{
            fontSize:"40px"
        }
    }
    const resumeDownload = () => {
        saveAs(resume, "Balasubramanyam-Resume.pdf");
    }
    return(
        <div>
            <div className="main">
                <div className={mode ? "main-left-light" : "main-left-dark"}>
                    
                    <span className="span-hello">Hello!!</span>
                    <span className="span-name">I'm Bala Subramanyam</span>
                    <span className="span-description">Passionate full stack developer experienced in React, Java spring boot and exploring Web3 Space actively and currently working in JPMC, Glasgow</span>
                    <button className="resume-btn" onClick = {resumeDownload}>Resume</button>
                    <div className={mode? "social-links-light" : "social-links-dark"}>
                       <a href="https://www.linkedin.com/in/b-subramanyam" className="anchor">
                            {
                            mode?
                            <img src={linkedinLight} alt="" className="social-link"/>:
                           <img src={linkedin} alt="" className="social-link"/>
                            }
                       </a>
                       <a href="https://www.github.com/karribalu" className="anchor">
                            {
                            mode?
                            <img src={githubLight} alt="" className="social-link"/>:
                            <img src={github} alt="" className="social-link"/>
                            }
                        </a>
                        <a href="https://www.twitter.com/subbu2339" className="anchor">
                            {
                            mode?
                            <img src={twitterLight} alt="" className="social-link"/>:
                            <img src={twitter} alt="" className="social-link"/>
                            }
                        </a>
                        <a href="mailto:karri.balu2339@gmail.com" className="anchor">
                            {mode?
                            <img src={mailLight} alt="" className="social-link"/>:
                            <img src={mail} alt="" className="social-link"/>
                            }
                        </a>
                    </div>
                    
                </div>
                {!mode?
                <img src={heroImage} alt="" className="main-right"/>
                :
                <img src={heroImageLight} alt="" className="main-right"/>
                }
            </div>
        </div>
    )
}

export default Main;