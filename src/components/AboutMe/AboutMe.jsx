import React from 'react'
import './AboutMe.css'
import { SectionHeadingLight } from '../SectionHeading/SectionHeading';
import { SectionHeadingDark } from '../SectionHeading/SectionHeadingDark';
/**
* @author
* @function AboutMe
**/

export const AboutMe = ({isLight}) => {
  return(
    <div className="about-me">
        {isLight ? (
            <SectionHeadingLight name='About Me' />
        ) : (
          <SectionHeadingDark name='About Me' />
        )}
        <div className="about-me-content">
            Full Stack Developer with a keen interest in blockchain and Web3 technologies. Experienced in React, Node.js, Spring Boot, I have a passion for exploring the potential 
            of decentralized applications and smart contracts. I am dedicated to staying up-to-date with the latest developments in blockchain and Web3, and I enjoy leveraging these 
            technologies to build innovative and secure solutions. 
        </div>
    </div>
   )
  }
