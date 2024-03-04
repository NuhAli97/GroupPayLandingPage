import React from "react";


export default function App() {
  return (
    
<div className="contact-form-main-container">
<h1 className="primary-heading" Style="font-size:35px; padding-bottom:1rem">CONTACT US</h1>
<form className="faq-form-container"> 
<p>Name:</p>
<input type="text" placeholder="Your Name" className="contact-input-con"/>
<p>Email:</p>
<input type="email" placeholder="Your Email" className="contact-input-con"/>
<p>Message:</p>
<textarea placeholder="Write Here...." rows="5" className="contact-input-area"></textarea>

<button className="secondary-button" Style="width:170px; margin-top:1rem">Submit</button>
     </form>
</div>
  );
}