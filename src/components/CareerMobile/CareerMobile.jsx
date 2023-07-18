import React from 'react'
import './CareerMobile.css';
import { useState, useEffect } from 'react';
import { SectionHeadingLight } from '../SectionHeading/SectionHeading';
import { SectionHeadingDark } from '../SectionHeading/SectionHeadingDark';
import { Footbar } from '../Footbar/Footbar';
import { RxCross1} from "react-icons/rx";
import { Education } from '../Career-Boxes/Education';
import { Achievements } from '../Career-Boxes/Achievements';
import { Jobs } from '../Career-Boxes/Jobs';
export const CareerMobile = (props) => {
    const {mode, careerDiv, setCareerDiv} = props;
    const [careerDivName,setCareerDivName] = useState("mobile-career");
    useEffect(()=>{
        careerDivName === "mobile-career" ? setCareerDivName("mobile-career-active") : setCareerDivName("mobile-career");
    },[careerDiv]);

  return(
    <div className={mode ? careerDivName + "-dark" : careerDivName}>

        <div className="mobile-career-head">
            {mode ? <SectionHeadingDark name="Skills"/> : <SectionHeadingLight name="Skills"/>}
            <RxCross1 className={mode ?"cross-mobile-dark" :"cross-mobile"} onClick={()=>setCareerDiv(!careerDiv)}/>
        </div> 
        <div className="career-boxes">
            <Education mode = {mode}/>
            <Achievements mode = {mode}/>
            <Jobs mode = {mode}/>
        </div>
        <Footbar mode={mode}/>
    </div>
   )
  }
