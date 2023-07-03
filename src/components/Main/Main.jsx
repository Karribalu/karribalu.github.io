import {TiSocialLinkedinCircular} from "react-icons/ti";
import {AiFillGithub,AiFillTwitterCircle} from "react-icons/ai";
import {ImMail4} from "react-icons/im";
import {linkedin, github, twitter, mail} from "../../icons";
import "./Main.css";
import { heroImage } from "../../icons";
import { hover } from "@testing-library/user-event/dist/hover";

const Main = ({mode}) =>{ 

    const socialDarkStyle = {
        color: "#fff",
        fontSize:"30px",
        hover:{
            fontSize:"40px"
        }
    }
    return(
        <div>
            <div className="main">
                <div className={mode ? "main-left-light" : "main-left-dark"}>
                    <span className="span-hello">Hello!!</span>
                    <span className="span-name">I'm Bala Subramanyam</span>
                    <span className="span-description">Passionate full stack developer experienced in React, Java spring boot and exploring Web3 Space actively and currently working in JPMC, Glasgow</span>
                    <div className={mode? "social-links-light" : "social-links-dark"}>
                       <a href="">
                           <img src={linkedin} alt="" className="social-link"/>
                       </a>
                       <a href="">
                            <img src={github} alt="" className="social-link"/>
                        </a>
                        <a href="">
                            <img src={twitter} alt="" className="social-link"/>
                        </a>
                        <a href="">
                            <img src={mail} alt="" className="social-link"/>
                        </a>
                    </div>
                </div>
                <div className="main-right">
                <img src={heroImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main;