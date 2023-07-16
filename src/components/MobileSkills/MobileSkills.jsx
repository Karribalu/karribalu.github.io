import React from 'react'
import './MobileSkills.css';
import { SectionHeadingLight } from '../SectionHeading/SectionHeading';
import { SectionHeadingDark } from '../SectionHeading/SectionHeadingDark';
import { Footbar } from '../Footbar/Footbar';
import { RxCross1} from "react-icons/rx";

export const MobileSkills = ({mode,skills,skillsDiv,setSkillsDiv}) => {
  return(
    <div className="mobile-skills">
        <div className="mobile-skills-head">
            {mode ? <SectionHeadingDark name="Skills"/> : <SectionHeadingLight name="Skills"/>}
            <RxCross1 className="cross-mobile" onClick={()=>setSkillsDiv(!skillsDiv)}/>
        </div> 
        <div className="mobile-skills-container">
            {skills.map((skill) => (
                <div className="mobile-skills-div">
                    <img src={skill[0]} alt={skill[1]} className="mobile-skills-icon" title={skill[1]}/>
                </div>
             ))}
        </div>
        <Footbar mode={mode}/>
    </div>
   )
}
