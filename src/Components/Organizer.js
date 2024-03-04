/* eslint-disable no-unused-vars */
import React from "react";
import Group from "../Assets/group-image.png";
import ChooseItems from "../Assets/choose-image.png";
import Split from "../Assets/split-image.png";
import Carousel from 'react-material-ui-carousel';
import Slider from "../Components/Slider.json";
import Item from "../Components/item";
import Slide1 from "../Assets/Slide1.png";
import Slide2 from "../Assets/Slide2.png";
import MobileImage from "../Assets/mobile-hand.png"
import Select from "react-select";
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

function Organizer() 
{

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
 
  
    <section id="conference-timeline">
        <h1 className="org-head-text mt-5 mb-4" Style="font-size:50px; font-weight:bold;">How to become an organizer</h1>
        <h3 className="org-sub-text mt-3 mb-1" Style="font-size:16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h3>
    <div class="conference-center-line"></div>
    <div class="conference-timeline-content">
  
      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left">
          <img src={MobileImage} alt="" />
          </div>
     
        </div>
        <div class="content-right-container">
          <div class="content-right">
            <h3 className="mt-1" Style="color:grey; font-size:15px;">STEP 1</h3>
            <h3 Style="font-size:20px"> Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
         
        </div>
        <div class="meta-date">
        
       
        </div>
      </div>

      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left">
          <img src={MobileImage} alt="" />
          </div>
      
        </div>
        <div class="content-right-container">
          <div class="content-right">
          <h3 className="mt-1" Style="color:grey; font-size:15px;">STEP 2</h3>
            <h3 Style="font-size:20px"> Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>
        <div class="meta-date">
        
        </div>
      </div>
  
      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left">
          <img src={MobileImage} alt="" />
          </div>

        </div>
        <div class="content-right-container">
          <div class="content-right">
          <h3 className="mt-1" Style="color:grey; font-size:15px;">STEP 3</h3>
            <h3 Style="font-size:20px"> Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
     
        </div>
        <div class="meta-date">
    
        </div>
      </div>

    </div>






  </section>

 
  )

}


export default Organizer;
