import React from 'react'
import './Education.css'
import education_logo from '../../assets/education.svg';
export const Education = () => {
  return(
    <div className='education'>
        <img src={education_logo} alt="education-logo" className="education-logo"/>
        <h3 className="education-text"> Education </h3>
        <ul className="education-list">
            <li className="education-list-item">
                <h4 className="education-list-item-title">2019 - 2022 </h4>
                <p className="education-list-item-text">B.Tech in Computer Science and Engineering</p>
            </li>
            <li className="education-list-item">
                <h4 className="education-list-item-title">2016 - 2019 </h4>
                <p className="education-list-item-text">Diploma in Computer Engineering</p>
            </li>
        </ul>
    </div>
   )
  }
