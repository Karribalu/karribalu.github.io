import React from 'react'
import './Footbar.css';
import {linkedin, github, twitter, mail} from "../../icons";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
export const Footbar = ({mode}) => {
    const [state, handleSubmit] = useForm("xpzgznoq");
    const [status, setStatus] = useState("");
    if (state.succeeded) {
        setStatus("SUCCESS");
    }
  return(
    
    <div className='footer'>
        <div className={mode? "footer_dark" : "footer_light"}>
            <div className='footer_left'>
                <span className='left_head'>Let's Connect</span>
                <span className='email'>karri.balu2339@gmail.com</span>
                <span className='phone'>+44 7367675677, +91 9652138888</span>
                <div className="social-links-footer">
                    <a href="https://www.linkedin.com/in/b-subramanyam" className="anchor">
                        <img src={linkedin} alt="" className="social-link-footer"/>
                    </a>
                    <a href="https://www.github.com/karribalu" className="anchor">
                        <img src={github} alt="" className="social-link-footer"/>
                    </a>
                    <a href="https://www.twitter.com/subbu2339" className="anchor">
                        <img src={twitter} alt="" className="social-link-footer"/>
                    </a> 
                    <a href="mailto:karri.balu2339@gmail.com" className="anchor">
                        <img src={mail} alt="" className="social-link-footer"/>
                    </a>
                </div>
            </div>
            <div className='footer_right'>
                <h2 className='right_head'>Send me a message</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <div className='form-name'>
                        <label htmlFor="name" className='label-name'>Name</label>
                        <input type="text" name="name" id="name" className='input-name' required/>
                        <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                    </div>
                    <div className='form-email'>
                        <label htmlFor="email" className='label-email'>Email</label>
                        <input type="email" name="email" id="email"  className='input-email' required/>
                        <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    </div>
                    <div className='form-message'>
                        <label htmlFor="message" className='label-message'>Message</label>
                        <textarea name="message" id="message" cols="30" rows="3" className='input-message' required></textarea>
                                <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    </div>
                    <button type="submit" className='submit-btn' disabled={state.submitting}>Send</button>
                </form>
            </div> 
        </div>
    </div>
   )
  }
