import React from 'react'
import { useState, useEffect } from 'react';
import './ProjectsMobile.css';
import { SectionHeadingLight } from '../SectionHeading/SectionHeading';
import { SectionHeadingDark } from '../SectionHeading/SectionHeadingDark';
import { Footbar } from '../Footbar/Footbar';
import { RxCross1} from "react-icons/rx";
import {react, js, aws, ts, solidity, hardhat, github,flask, html, python, css} from "../../icons";
import {SingleProject} from '../Projects/SingleProject';

export const ProjectsMobile = (props) => {
    const {mode, projectsDiv, setProjectsDiv} = props;
    const [projectsDivName,setProjectsDivName] = useState("mobile-projects");
    useEffect(()=>{
        projectsDivName === "mobile-projects" ? setProjectsDivName("mobile-projects-active") : setProjectsDivName("mobile-projects");
    },[projectsDiv]);

     const project1 = {
        title: 'Portfolio Website',
        description: 'A portfolio website built using ReactJS and deployed on AWS Amplify. Implemented a responsive design to ensure optimal viewing experience across different devices. Showcased previous projects and highlighted key accomplishments in a dedicated section.',
        technologies: [
            [react, "React"],
            [js, "JavaScript"],
            [aws, "AWS"],
            [github, "Git"],
            [html, "HTML"],
            [css, "CSS"]
        ],
        github: 'https://github.com/Karribalu/portfolio',
        link: 'https://karribalu.github.io/portfolio/'
    }
    const project2 = {
        title: 'NFT Marketplace',
        description: 'A decentralized NFT marketplace built using ReactJS,Type Script, Solidity and deployed on the Ethereum blockchain.',
        technologies: [
            [react, "React"],
            [ts, "TypeScript"],
            [solidity, "Solidity"],
            [hardhat, "Hardhat"],
            [github, "Git"]
        ],
        github: 'https://github.com/Karribalu/nft-marketplace',
        link: ''
    }
    const project3 = {
        title: 'E Pass Request Using Flask',
        description: 'A web application built using Flask and deployed on Heroku. The application allows users to request for an e-pass during the COVID-19 pandemic.',
        technologies: [
            [python, "Python"],
            [flask, "Flask"],
            [html, "HTML"],
            [github, "Git"],
        ],
        github: 'https://github.com/Karribalu/E-Pass_Request_Using_Flask',
        link: ''
    }
  return(
    <div className={mode ? projectsDivName+"-dark" : projectsDivName}>
        <div className="mobile-projects-head">
            {mode ? <SectionHeadingDark name="Projects"/> : <SectionHeadingLight name="Projects"/>}
            <RxCross1 className={mode ?"cross-mobile-dark":"cross-mobile"} onClick={()=>setProjectsDiv(!projectsDiv)}/>
        </div>

        <div className='mobile-projects-container'>
            <SingleProject mode={mode} project={project1} />
            <SingleProject mode={mode} project={project2} />
            <SingleProject mode={mode} project={project3} />
        </div>
        <Footbar mode={mode} />
    </div>
   )
  }
