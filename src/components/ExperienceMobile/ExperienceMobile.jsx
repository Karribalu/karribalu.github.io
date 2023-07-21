import React from 'react'
import { SectionHeadingLight } from '../SectionHeading/SectionHeading';
import { SectionHeadingDark } from '../SectionHeading/SectionHeadingDark';
import { RxCross1} from "react-icons/rx";
import { useState, useEffect } from 'react';
import {java, spring, aws,ts, Jenkins, Terraform, Docker,js, Kubernetes, Ansible, python, sklearn, dataanalytics, datascience, clustering, flask, react} from "../../icons";
import './ExperienceMobile.css';
import { SmallExperienceBox } from '../Experience-Boxes/SmallExperienceBox';
import { Footbar } from '../Footbar/Footbar';

export const ExperienceMobile = (props) => {
    const {mode, experienceDiv, setExperienceDiv} = props;
    const [experienceDivName,setExperienceDivName] = useState("mobile-experience");
    useEffect(()=>{
        experienceDivName === "mobile-experience" ? setExperienceDivName("mobile-experience-active") : setExperienceDivName("mobile-experience");
    },[experienceDiv]);

    const job1 = {
        title: 'Software Engineer',
        company: 'JPMC',
        location: 'Glasgow, UK',
        date: 'Feb 2023 - Present',
        description: [
            'Implemented an innovative key store integration, bolstering application security and reducing vulnerabilities.',
            'Developed comprehensive unit tests, increasing test coverage by 8% and improving code reliability.',
            'Worked on migrating the database from MarkLogic to MongoDB and successfully migrated the data with zero downtime.',
            'Redisigned and developed the complete UI of the application using ReactJS',
            'Successfully integrated an external document creation tool using AWS Lambda and designed APIs for seamless integration.',
            'Strengthened key management practices, ensuring the confidentiality and integrity of sensitive information.'
        ],
        technologies: [
            [java, "Java"],
            [spring, "Spring"],
            [aws, "AWS"],
            [js, "JavaScript"],
            [react, "React"],
        ]
    }
  const job2 = {
        title: 'Associate Software Engineer',
        company: 'CyberArk',
        location: 'Hyderabad, India',
        date: 'Sep 2022 - Jan 2023',
        description: [
          'Worked as DevOps Engineer for the Identity Security Product',
          'Worked on building the Jenkins Pipeline which cleans up the workspaces.',
          'Worked on the Jenkins Pipeline which cleans up the workspaces.',
          'Written some terraform files to create a QA Workspace',
          'Worked with containerization and orchestration tools like Docker and kubernetes respectively.'
        ],
        technologies: [
            [Jenkins, 'Jenkins'],
            [Terraform, 'Terraform'],
            [Docker, 'Docker'],
            [Kubernetes, 'Kubernetes'],
            [Ansible, 'Ansible'],
            [aws, 'AWS']
        ]
    }
    const job3 = {
        title: 'Artificial Intelligence Intern',
        company: 'Jazeera Technologies',
        location: 'Hyderabad, India',
        date: 'Sep 2021 - Nov 2021',
        description: [
          'Worked with the team who is responsible to analyse the pattern of the Customers of a painting company  for better Sales.',
          'Performed feature scaling for a better machine learning model.',
          'Developed different machine learning models and performed hyper parametertuning to get the best prediction accuracy out of them.',
          'The model worked with 88% of accuracy for the prediction of the colors which are suitable for the respective customers.'
        ],
        technologies: [
            [python, 'Python'],
            [sklearn, 'Scikit-Learn'],
            [datascience, 'Data Science'],
            [clustering, 'Clustering'],
            [flask, 'Flask'],
            [dataanalytics, 'Data Analytics']
        ]

    }

  return(
    <div className={mode ? experienceDivName +"-dark" : experienceDivName}>
        <div className="mobile-experience-head">
            {mode ? <SectionHeadingDark name="Experience"/> : <SectionHeadingLight name="Experience"/>}
            <RxCross1 className={mode ?"cross-mobile-exp-dark" :"cross-mobile-exp"} onClick={()=>setExperienceDiv(!experienceDiv)}/>
        </div>
        <div className="mobile-experience-container">
            <SmallExperienceBox mode = {mode} job ={job1} className="one"/>
            <SmallExperienceBox mode = {mode} job ={job2} className="two"/>
            <SmallExperienceBox mode = {mode} job ={job3} className="three"/>
        </div>
        <Footbar mode={mode}/>
    </div>
   )
  }
