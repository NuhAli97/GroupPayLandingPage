import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import meeting from "../Assets/meeting.jpg"

const HomePageOrganizer = () => {
  return (
    <div className="home-oranizer-wrapper" id="HomePageOrganizer"  data-aos="fade-up"> 
        <div className="home-oranizer-left">
        <h1 className="primary-heading" Style="font-size:35px;">Group Pay Virtual Card!</h1>
        {/* <h1 className="secondary-text-home" Style="font-size:15px; margin-top:-10%">(Coming Soon)</h1> */}

        <p className="secondary-text-home"> Use your Group Pay virtual debit card to instantly spend funds
                  from your group card wherever Visa is accepted.</p>

          <button className="secondary-button-inverted">Coming Soon</button>
        </div>
        <div className="home-oranizer-right">
            <img src={meeting} alt="" className="card"></img>
        </div>
        
      </div>
   
  );
};

export default HomePageOrganizer;
