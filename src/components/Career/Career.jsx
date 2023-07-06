import React from 'react'
import './Career.css'
import { SectionHeadingLight } from '../SectionHeading/SectionHeading';
import { SectionHeadingDark } from '../SectionHeading/SectionHeadingDark';
import { Education } from '../Career-Boxes/Education';
import { Achievements } from '../Career-Boxes/Achievements';
export const Career = ({mode}) => {
  return(
    <div className='career'>
        {!mode ? (
            <SectionHeadingLight name='Career Highlights' />
        ) : (
          <SectionHeadingDark name='Career Highlights' />
        )}

        <div className="career-boxes">
            
            <Education/>
            <Achievements/>
        </div>
    </div>
   )
  }
