import React from 'react'
import './SectionHeading.css'
export const SectionHeading = ({name}) => {
  return(
    <div>
        <div className="section-heading">
            <div className="section-heading_line"></div>
            <div className="section-heading_shade"></div>
            <h1>{name}</h1>
        </div>
    </div>
   )
  }
