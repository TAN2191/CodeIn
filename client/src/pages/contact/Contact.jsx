import React from 'react';
import "./contact.css";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Contact() {

  const [userData, setUserData] = useState({});
  
  // const userContact

  return (
    <div className='contact'>
        <h1 className='contactTitle'>DROP US A MESSAGE</h1>
        <form className='contactForm'>
            <label className='contactLabel'>Name</label>
              <input type="text" className='contactInput' placeholder='Your Name' />
            <label className='contactLabel'>Email</label>
              <input type="text" className='contactInput' placeholder='Your Email' />
            <label className='contactLabel'>Message</label>
            
            <textarea type="text" className='message' placeholder='Your Message' />
          <input type="submit" className='contactButton'/>
        </form>
        
        <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
        
    </div> 
  
     
  )
}
