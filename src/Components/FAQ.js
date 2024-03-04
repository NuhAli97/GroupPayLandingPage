import React from "react";
import { data } from "./FAQData";
import { Accordion } from "./Accordion";
import "./FAQ.css";
import Contactsection from "./Contactsection";
import AOS from "aos";
import "aos/dist/aos.css";
export const FAQ =  () => {
  
  return (
    <div className="faqcon-main-container">
      <div>
      <div className="contact-form-section">
      <Contactsection/>
      </div>
      </div>

<div>
      <div className="faq-form-section">
        {/* <h3 className="main-title">Most asked questions</h3> */}
        <div className="main-title-underline" >
        
       </div>
       
       </div>
       </div>
</div>
   
  );
};
export default FAQ;