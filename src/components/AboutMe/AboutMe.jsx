import React from 'react'
import './AboutMe.css'
import { SectionHeadingLight } from '../SectionHeading/SectionHeading';
import { SectionHeadingDark } from '../SectionHeading/SectionHeadingDark';
/**
* @author
* @function AboutMe
**/

export const AboutMe = ({mode}) => {
  return(
    <div className="about-me" id= "about-me">
        {!mode ? (
            <SectionHeadingLight name='About Me' />
        ) : (
          <SectionHeadingDark name='About Me' />
        )}
        <div className={!mode? "about-me-content" : "about-me-content-dark"}>
            Full Stack Java Developer with a keen interest in blockchain and Web3 technologies. Experienced in React, Node.js, Spring Boot, I have a passion for exploring the potential 
            of decentralized applications and smart contracts. I am dedicated to staying up-to-date with the latest developments in blockchain and Web3, and I enjoy leveraging these 
            technologies to build innovative and secure solutions.I also like System Design and have a good understanding of the same.
        </div>
    </div>
   )
  }
