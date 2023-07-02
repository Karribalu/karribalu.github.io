import { linkedin, github, twitter, mail } from "../../icons";
import "./Main.css";
import some from "../../assets/some.svg";

const Main = ({mode}) =>{ 
    return(
        <div>
            <div className="main">
                <div className={mode ? "main-left-light" : "main-left-dark"}>
                    <span className="span-hello">Hello!!</span>
                    <span className="span-name">I'm Bala Subramanyam</span>
                    <span className="span-description">Passionate full stack developer experienced in React, Java spring boot and exploring Web3 Space actively and currently working in JPMC, Glasgow</span>
                    <div className={mode? "social-links-light" : "social-links-dark"}>
                       
                        <img src={linkedin} alt="linkedin" className="social-link"/>
                        <img src={github} alt="github" className="social-link"/>
                        <img src={twitter} alt="twitter" className="social-link"/>
                        <img src={mail} alt="mail" className="social-link"/>
                    </div>
                </div>
                <div className="main-right">
                <img src={some} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main;