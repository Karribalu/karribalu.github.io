import React from 'react'
import jobsLogo from "../../assets/jobs-logo.svg";
import './Jobs.css';
export const Jobs = (props) => {
  return(
    <div className='jobs'>
        <div className="jobs-logo">
            <div className="jobs-logo-in">
              <img src={jobsLogo} alt="jobs" className='jobs-logo-svg'/>
            </div>
        </div>
        <h3 className="jobs-heading">Jobs</h3>
        <h3 className="year">2023</h3>
        <p className="jobs-text">
            Software Engineer at JPMC, Glasgow, UK
        </p>
    </div>
   )
  }
