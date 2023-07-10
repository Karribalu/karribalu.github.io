import React from 'react';
import "./SmallExperienceBox.css";
import squarePoint from "../../assets/square-point.svg";
export const SmallExperienceBox = ({mode, job}) => {
    
  return(
    <div className={mode ? "smallExperienceLight" : "smallExperienceDark" }>
        <div className="smallExperience_head">
            <div className="smallExperience_head_left">
                <h2 className={mode? "" : "smallExperience_head_left_title"}>{job.title}</h2>
                <h3 className="smallExperience_head_left_company">{job.company}, {job.location} - {job.date}</h3>
            </div>
            <div className="smallExperience_head_right">
                {job.technologies.map((technology) => (     
                    <div className="smallExperience_head_right_technology">
                    {/* <img src={`../../assets/skills-icons/${technology}.svg`} alt={technology} />                     */}
                    <img src={technology[0]} alt={technology[1]} className='skill_image' title={technology[1]}/> 
                    </div>))}
                </div>
         </div>
            <div className="smallExperience_body">

                {job.description.map((description) => (
                    <div className="smallExperience_body_description_container">
                    <img src={squarePoint} alt="squarePoint" className="smallExperience_body_point" />
                    <p className="smallExperience_body_description">{description}</p>
                    </div>
                ))}
            </div>
    </div>
   )
  }
