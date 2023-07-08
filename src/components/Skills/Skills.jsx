import React from 'react';
import './Skills.css';
import { SectionHeadingLight } from '../SectionHeading/SectionHeading';
import { SectionHeadingDark } from '../SectionHeading/SectionHeadingDark';
import { trollyManLight } from '../../icons';
import { trollyManDark } from '../../icons';
import skillsSet from "../../assets/skills-icons/skills-set.svg"
export const Skills = ({mode}) => {
  return(
    <div className='skills'>
        {!mode ? (
            <SectionHeadingLight name='Skills' />
        ) : (
          <SectionHeadingDark name='Skills' />
        )}
        <div className='skills-container'>
            <img src={mode ? trollyManLight : trollyManDark} alt="" className="trolly-man"/>

            <div className="skills-set">
                <img src = {skillsSet} alt="" />   
            </div>

            <div className={mode? "" : "nav-line-dark-skills"}></div>

        </div>
    </div>
   )
  }
