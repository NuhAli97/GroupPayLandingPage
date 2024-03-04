import React from 'react';
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import {StyleSheet,TextInput  } from 'react-native';
import Organizer from "../Components/Organizer"
import "./POTC.css";



function Organizer2() {
  
 
  
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
    
   
  }

 
  return (
    <div id="organizer2">
    <Organizer/>
  <h1 className="mb-5" id="org2-heading" Style="padding-top:40px; margin-left:340px; " >Sign up to become an organizer</h1>
    <div className="org-form" id="org-container">
  
    <form onSubmit={onSubmit} id="org2-form">
         <div className="org2-form-inputs"> 
         <div className="mb-3" id="org-form-fname">
         <label className="form-label" htmlFor="first-name">
           First name
         </label>
         <input className="form-control" type="text" id="fname" required />
       </div>

       <div className="mb-3" id="org-form-lname">
         <label className="form-label" htmlFor="last-name">
           Last name
         </label>
         <input className="form-control" type="text" id="lname" required />
       </div>
       <div className="mb-3" id="org-form-email">
         <label className="form-label" htmlFor="email">
           Email
         </label>
         
         <input className="form-control" type="email" id="email" required />
        
       </div>
       
    
      
   <div className="org-PhoneList" id="org-form-phone" >
     <label className="mb-2">Phone:</label>
      <input className="form-control" type="tel" id="org-tel" required />

         </div>
  
      

</div>

<div className="org-ButtonHolder" > 
     
     <button className="org-submit-button mt-4 mb-5"  type="submit" >
      {formStatus}
    </button>
      
       </div>
     </form>

  </div>
  </div>
 
  )
}
export default Organizer2

/*<div className="org-ButtonHolder" > 
     
     <button className="org-submit-button mt-4 mb-5"  type="submit" >
      {formStatus}
    </button>
      
       </div> */