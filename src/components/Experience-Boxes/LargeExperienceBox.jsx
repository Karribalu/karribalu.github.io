import React from 'react'
import java from "../../assets/skills-icons/java.svg";
import spring from "../../assets/skills-icons/spring.svg";
import aws from "../../assets/skills-icons/aws.png";
import ts from "../../assets/skills-icons/ts.svg";
import "./LargeExperienceBox.css";
import squarePoint from "../../assets/square-point.svg";
export const LargeExperienceBox = ({mode, job}) => {
    
  return(
    <div className={mode ? "largeExperienceLight" : "largeExperienceDark" }>
        <div className="largeExperience_head">
            <div className="largeExperience_head_left">
                <h2 className= {mode ? "" : "largeExperience_head_left_title"}>{job.title}</h2>
                <h3 className="largeExperience_head_left_company">{job.company}, {job.location} - {job.date}</h3>
            </div>
            <div className="largeExperience_head_right">
                {job.technologies.map((technology) => (     
                    <div className="largeExperience_head_right_technology">
                    {/* <img src={`../../assets/skills-icons/${technology}.svg`} alt={technology} />                     */}
                    <img src={technology[0]} alt={technology[1]} className='skill_image' title={technology[1]}/> 
                    </div>))}
                </div>
         </div>
            <div className="largeExperience_body">

                {job.description.map((description) => (
                    <div className="largeExperience_body_description_container">
                    <img src={squarePoint} alt="squarePoint" className="largeExperience_body_point" />
                    <p className="largeExperience_body_description">{description}</p>
                    </div>
                ))}
            </div>
    </div>
   )
  }
