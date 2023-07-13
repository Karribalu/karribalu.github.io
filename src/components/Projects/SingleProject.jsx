import React from 'react'
import { github } from '../../icons'
import './SingleProject.css';
import {BsGlobe, BsGithub} from 'react-icons/bs';
export const SingleProject = ({mode, project}) => {
  return(
    <div className= {mode ? "singleProjectLight" : "singleProjectDark"}>
        <div className="singleProject_head">
            <h2 className= {mode ? "" : "singleProject_head_title"}>{project.title}</h2>
        </div>
        <div className="singleProject_body">
            <p className="singleProject_body_description">{project.description}</p>
            <div className="singleProject_body_technologies">
                {project.technologies.map((technology) => (     
                    <div className="singleProject_body_technology">
                    {/* <img src={`../../assets/skills-icons/${technology}.svg`} alt={technology} />                     */}
                    <img src={technology[0]} alt={technology[1]} className='skill_image_project' title={technology[1]}/> 
                    </div>))}
            </div>

            <div className="singleProject_body_links">
                {project.link === '' ? null :
                <a href={project.link} target="_blank" class="links_anchor" title="Website">
                <BsGlobe size = "43px" color='white'/>
                </a>
                }
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                <BsGithub size = "43px" color='white'/>
                </a>
            </div>
        </div>

    </div>
   )
  }
