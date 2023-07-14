import React from 'react'
import achievement from "../../assets/achievements.svg"
import './Achievements.css';

export const Achievements = ({mode}) => {
  return(
    <div className={!mode ? 'achievements': "achievements-light"}>
        <img src={achievement} alt="trophy" className='achievements-logo'/>
        <h3 className="achievements-heading">Achievements</h3>
        <div className="achievements-box">
            <p className="achievements-box-text">Recieved an International job offer</p>
            <p className="achievements-box-text">Top 3rd coder of the College</p>
            <p className="achievements-box-text">Achieved 198 State rank in E-CET</p>
        </div>
    </div>
   )
  }
