import React from 'react'
import { SectionHeadingLight } from '../SectionHeading/SectionHeading';
import { SectionHeadingDark } from '../SectionHeading/SectionHeadingDark';
import { LargeExperienceBox } from '../Experience-Boxes/LargeExperienceBox';
import './Experience.css';
import {java, spring, aws,ts, Jenkins, Terraform, Docker, Kubernetes, Ansible, python, sklearn, dataanalytics, datascience, clustering, flask} from "../../icons";
import { SmallExperienceBox } from '../Experience-Boxes/SmallExperienceBox';
export const Experience = ({mode}) => {
  const job1 = {
        title: 'Software Engineer',
        company: 'JPMC',
        location: 'Glasgow, UK',
        date: 'Feb 2023 - Present',
        description: [
            'Developed and maintained Java Spring Boot applications, contributing to high-quality code and scalable solutions.',
            'Implemented an innovative key store integration, bolstering application security and reducing vulnerabilities.',
            'Developed comprehensive unit tests, increasing test coverage by 8% and improving code reliability.',
            'Successfully integrated an external document creation tool using AWS Lambda and designed APIs for seamless integration.',
            'Strengthened key management practices, ensuring the confidentiality and integrity of sensitive information.'
        ],
        technologies: [
            [java, "Java"],
            [spring, "Spring"],
            [aws, "AWS"],
            [ts, "TypeScript"]
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
          'Found a few bugs which is failing the pipeline after which the performance was increased by 12 %',
          'Worked on the Jenkins Pipeline which cleans up the workspaces.',
          'Written some terraform files to create a QA Workspace',
          'Got to learn some new containerization and Orchestration tools like Docker and kubernetes respectively.'
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
    <div className='experience'>
         {!mode ? (
            <SectionHeadingLight name='Experience' />
        ) : (
          <SectionHeadingDark name='Experience' />
        )}
        <div className='experience-container'>
            <div className='one'>
            <LargeExperienceBox mode = {mode} job ={job1} className="one"/>
            </div>
            <div className='two'>
            <SmallExperienceBox mode = {mode} job ={job2} className="two"/>
            <SmallExperienceBox mode = {mode} job ={job3} className="three"/>
            </div>
        </div>
    </div>
   )
  }
