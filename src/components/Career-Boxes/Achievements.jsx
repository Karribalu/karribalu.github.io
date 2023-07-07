import React from 'react'
import achievementCircle from "../../assets/achievements.svg"
import './Achievements.css';
import trophy from "../../assets/trophy.svg";

export const Achievements = () => {
  return(
    <div className='achievements'>
        <div className="achievements-logo">
            <div className="achievements-logo-in">
              <img src={trophy} alt="trophy" className='trophy'/>
            </div>
        </div>
        <h3 className="achievements-heading">Achievements</h3>
        <div className="achievements-box">
            <p className="achievements-box-text">Recieved an International job offer</p>
            <p className="achievements-box-text">Top 3rd coder of the College</p>
            <p className="achievements-box-text">Achieved 198 State rank in E-CET</p>
        </div>
    </div>
   )
  }
