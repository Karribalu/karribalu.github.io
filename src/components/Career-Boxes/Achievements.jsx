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
        <h3 className='year'></h3>

    </div>
   )
  }
