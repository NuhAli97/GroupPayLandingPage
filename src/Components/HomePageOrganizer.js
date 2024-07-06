import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import meeting from "../Assets/meeting.jpg";
import { useTranslation } from "react-i18next";

const HomePageOrganizer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
      className="home-oranizer-wrapper"
      id="HomePageOrganizer"
      data-aos="fade-up"
    >
      <div className="home-oranizer-left">
        <h1 className="primary-heading" Style="font-size:35px;">
          {t("Group Pay Virtual Card!")}
        </h1>
        {/* <h1 className="secondary-text-home" Style="font-size:15px; margin-top:-10%">(Coming Soon)</h1> */}

        <p className="secondary-text-home">
          {t(
            "Use your Group Pay virtual debit card to instantly send funds from your group card wherever Visa is accepted."
          )}
        </p>

        <button className="secondary-button-inverted w-96">
          {t("Coming Soon")}
        </button>
      </div>
      <div className="flex justify-center items-center pt-10 ">
        <img src={meeting} alt="" className="w-96 rounded-lg"></img>
      </div>
    </div>
  );
};

export default HomePageOrganizer;
