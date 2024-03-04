/* eslint-disable no-unused-vars */
import React from "react";
import BannerImage from "../Assets/Rectangle.png";
import Apple from "../Assets/Apple.png";
import Android from "../Assets/Android.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import {StyleSheet,TextInput  } from 'react-native';
import "./POTC.css";




const SubjectOptions = [
  { value: "Inquiries", label: "Inquiries" },
  { value: "Complain", label: "Complain" },
  { value: "Suggestion", label: "Suggestion" },
  { value: "Other", label: "Other" },
];

const DialCodes = [
  { value: "+966", label: "+966" },

]; 
const Country = [
    { value: "Saudi Arabia", label: "Saudi Arabia" },

  ];
  const Business = [
    { value: "MSP", label: "MSP" },
    { value: "VAR", label: "VAR" },
  ];

const Home = () => {
    const [formStatus, setFormStatus] = React.useState('Submit')
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
    <div className="partner-container" id="Home">
      <div className="partner-banner-container" Style="height:600px; ">
      <div className="partner-text-section">
      <h4 className="primary-heading m-1" Style="max-width: 500px !important; font-size:40px; color:white; margin-left:120px !important;">Become a Partner!</h4>
        <p className="secondary-text-home m-5" Style=" font-size:19px; max-width:700px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet
             porttitor eget dolor. Mauris in aliquam sem fringilla ut morbi.
             Massa enim nec dui nunc mattis enim. Donec massa sapien faucibus et. Risus in hendrerit 
             gravida rutrum quisque non tellus orci. Egestas erat imperdiet sed euismod nisi porta lorem. Posuere lorem ipsum dolor sit.
              Integer malesuada nunc vel risus commodo viverra maecenas. Augue neque gravida in fermentum et sollicitudin. Nisi vitae suscipit tellus mauris a.</p>
      </div>


      <div className="Partner-form">
      <form onSubmit={onSubmit}>
          
          <h4 className="mb-5" Style="text-align:center; font-size: 30px  "> Join Now !</h4>
     <div className="mb-3">
       <div className="SubjectList">
       <label className="mb-2">Country</label>
         <Select options={Country} />
       </div>
   
    </div>
    
    <div className="mb-3">
       
       <div className="SubjectList">
       <label className="mb-2">Business type</label>
         <Select options={Business} />
       </div>
   
    </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="first-name">
            First name
          </label>
          <input className="form-control" type="text" id="fname" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="last-name">
            Last name
          </label>
          <input className="form-control" type="text" id="lname" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          
          <input className="form-control" type="email" id="email" required />
         
        </div>


        <div className="phone-container">
       
      
   
    <div className="PhoneList" id="Phone">
      <label className="mb-2">Phone:</label>
       <input className="form-control" Style="max-width:640px !important" type="tel" id="tel" required />

    </div>
      
     </div>
     
     <div className="mb-3">
          <label className="form-label" htmlFor="Job">
            Job title:
          </label>
          
          <input className="form-control" type="text" required />
         
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="company">
            Company:
          </label>
          
          <input className="form-control" type="text" required />
         
        </div>

   
        <div className="mb-3">
          <label className="form-label" htmlFor="address">
            Address:
          </label>
          <textarea className="form-control" required />
        </div>

      
        <div className="mb-3">
          <label className="form-label" htmlFor="city">
            City:
          </label>
          
          <input className="form-control" type="text"  required />
         
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="Postal">
            Postal code:
          </label>
          
          <input className="form-control" type="text" required />
         
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="Employees">
            Number of employees:
          </label>
          
          <input className="form-control" type="number"  required />
         
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="partner-website">
            Website:
          </label>
          
          <input className="form-control" type="text" required />
         
        </div>


        <p className="mt-4" Style=" font-size: 15px; margin-left: .5rem"> By clicking "Submit", you agree to Qatta Terms and Conditions and acknowledge you have read the Privacy Notice. <br/> </p>
  
        

        <div className="ButtonHolder" > 
      
         <button className="Submit-button mt-2" type="submit">
          {formStatus}
        </button></div>
      </form>

      </div>

      

        </div>
      </div>
  
  );
};

export default Home;
