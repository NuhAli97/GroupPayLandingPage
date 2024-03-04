import React from "react";
import trust from "../Assets/trust2.png";
import secure from "../Assets/secure2.png";
import efficient from "../Assets/efficient2.png";
import simple from "../Assets/simple2.png";
const AboutQatta = () => {
  const AppInfo = [
    {
      image: simple,
      title: "SIMPLE TO USE",
      text: "Lorem Ipsum is simply dummy text printing and typesetting and industry. Lorem Ipsum been. ",
    },
    {
      image: efficient,
      title: "EFFICIENT",
      text: "Lorem Ipsum is simply dummy text printing and typesetting and industry. Lorem Ipsum been. ",
    },
    {
      image: trust,
      title: "RELIABLE",
      text: "Lorem Ipsum is simply dummy text printing and typesetting and industry. Lorem Ipsum been. ",
    },
    {
      image: secure,
      title: "SECURE",
      text: "Lorem Ipsum is simply dummy text printing and typesetting and industry. Lorem Ipsum been. ",
    },
  ];
  return (
    <div className="aboutqatta-section-wrapper" id="AboutQatta" data-aos="fade-up">
      <div className="aboutqatta-section-top">
        <h1 className="primary-heading" Style="font-size:37px;">THE MOST NEEDED APPLICATION!</h1>
        <p className="secondary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
     
    
      </div>
     
      <div className="aboutqatta-section-bottom">
        {AppInfo.map((data) => (
         
          <div className="aboutqatta-section-info" key={data.title}id="hover-underline-animation">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div >
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
   
    </div>
   
  );
};

export default AboutQatta;
