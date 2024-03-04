/* eslint-disable no-unused-vars */
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../Assets/Logo.png";
import {FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
   
    <div className="main-footer">
    <div className="footer-container">

       <div className="row">
        {/* Column1
        <div className="col">
          <h4>Opening Hours</h4>
          <ui className="list-unstyled">
             <p>Weekdays 8:00am-7:30pm</p>
             <p>Weekends 8:00am-2:00pm</p>
           </ui>
        </div> */}

        {/* Column2 */}
        <div className="col">
          <h4>Address</h4>
          <ui className="list-unstyled">
             <p>AlAhsa-Hofuf</p>
             {/* <h4>Opening Hours</h4>
             <p>Weekdays 8:00am-7:30pm</p>
             <p>Weekends 8:00am-2:00pm</p> */}
         </ui>
         </div>

        {/* Column3 */}
        <div className="col">
          <h4>Contact</h4>
         <ui className="list-unstyled">
           <p>the.group.pay@gmail.com</p>
            {/* <p>013-888-888</p> */}
            {/* <h4>News</h4>
            <h4>FAQs</h4> */}
          </ui>
        </div>

        {/* Column4 */}
        <div className="col">
          <h4>Join us</h4>
         <ui className="list-unstyled">
           <p>Become a Partner</p>
            {/* <p>Become an Organizer</p> */}
           
          </ui>
        </div>

        {/* Column5
        <div className="col">
        
         <ui className="list-unstyled">
           <p>News</p>
            <p>FAQs</p>
          </ui>
        </div> */}

      </div>





      <hr /> 
      
      
       <div className="row">
       
       <div className="col">
          &copy;{new Date().getFullYear()} All rights reserved
          </div>

          <div className="col">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy</a>
          </div>


          <div className="col">
        <a href="https://www.instagram.com/the.group.pay/?igsh=MXR0ZWNib3h4MXRhYQ%3D%3D"><FaInstagram></FaInstagram></a>
        <a href="https://www.linkedin.com/in/group-pay-04b03b2b7/"><FaLinkedin></FaLinkedin></a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FTheGroupPay"><FaTwitter></FaTwitter></a>
        </div>

       </div> 

    </div>
  </div>


  );
};

export default Footer;
