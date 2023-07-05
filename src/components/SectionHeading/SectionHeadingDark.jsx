import React from 'react'
import './SectionHeadingDark.css'
import sectionLine from '../../assets/section-heading-line-dark.svg';
import sectionShade from '../../assets/section-heading-dark.svg';
export const SectionHeadingDark = ({name}) => {
  return(
        <div className="section-heading-dark">
          <img src={sectionLine} alt="section-heading-line" className="section-heading-line-dark"/>
          <img src={sectionShade} alt="section-heading-shade" className="section-heading-shade-dark"/>
          <h1 className= "section-name-dark">{name}</h1>
        </div>
   )
  }

