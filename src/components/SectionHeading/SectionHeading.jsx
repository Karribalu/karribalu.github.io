import React from 'react'
import './SectionHeading.css'
import sectionLine from '../../assets/section-heading-line-light.svg';
import sectionShade from '../../assets/section-heading-light.svg';
export const SectionHeadingLight = ({name}) => {
  return(
        <div className="section-heading">
          <img src={sectionLine} alt="section-heading-line" className="section-heading-line"/>
          <img src={sectionShade} alt="section-heading-shade" className="section-heading-shade"/>
          <h1 className= "section-name">{name}</h1>
        </div>
   )
  }

