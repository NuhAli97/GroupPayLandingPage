/* eslint-disable no-unused-vars */
import React from "react";
import AboutBackground from "../Assets/About-background.png";
import AboutBackgroundImage from "../Assets/about-us-bg.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="about-section-container" id="About">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">{this("About us")}</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
      </div>
    </div>
  );
};

export default About;
