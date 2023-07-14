import React from 'react'
import jobsLogo from "../../assets/jobs.svg";
import './Jobs.css';
export const Jobs = ({mode}) => {
  return(
    <div className={mode? 'jobs-light':'jobs'}>
        
        <img src={jobsLogo} alt="jobs" className='jobs-logo'/>
           
        <h3 className="jobs-heading">Jobs</h3>
        {/* <h3 className="year">2023</h3> */}
        <ul className="education-list">
            <li className="education-list-item">
                <h4 className="education-list-item-title">2023 </h4>
                <p className="education-list-item-text">Software Engineer @ JPMC, UK</p>
            </li>
            <li className="education-list-item">
                <h4 className="education-list-item-title">2022 </h4>
                <p className="education-list-item-text">DevOps Engineer at Cyberark, Hyderabad</p>
            </li>
        </ul>
    </div>
   )
  }
