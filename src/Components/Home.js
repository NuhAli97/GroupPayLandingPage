/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Counters from "../Components/Counters";
import BannerImage from "../Assets/home-phone.png";
import Apple from "../Assets/Apple.png";
import Android from "../Assets/Android.png";
import HomeNavbar from "./HomeNavbar";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import JoinWaitingListPopup from "./JoinWaitingListPopup";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative home-container w-full" id="Home">
      <HomeNavbar className="fixed top-0 left-0 w-full z-50" />
      <div className="flex flex-wrap items-center pt-10 md:pt-14 px-4 md:px-10">
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-0">
          <img
            className="max-h-72 md:max-h-screen w-auto"
            src={BannerImage}
            alt="Banner"
          />
        </div>
        <div className="w-full md:w-1/2 mt-16 md:mt-0 px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("Simplified Group Payment Solutions")}
          </h1>
          <p className="text-base md:text-lg text-white mb-8">
            {t(
              "Gather and divide expenses among groups of friends, family, or colleagues effortlessly. Join now to organize and chip in for your preferred group endeavors."
            )}
          </p>
          <div className="flex gap-5 mb-10 w-fit">
            {/* <a id="android" href="Android">
              <img className="h-10 md:h-12 w-fit" src={Android} alt="Android" />
            </a>
            <a id="apple" href="Apple">
              <img className="h-10 md:h-12 w-fit" src={Apple} alt="Apple" />
            </a> */}

            <a
              onClick={openPopup}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#6b46c1", // Purple background
                color: "white", // White text
                borderRadius: "4px", // Rounded corners
                textAlign: "center", // Centered text
                cursor: "pointer", // Pointer cursor on hover
                textDecoration: "none", // Remove underline
                border: "2px solid transparent", // Initial border (transparent)
                transition:
                  "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease", // Smooth transition
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"; // Transparent background
                e.currentTarget.style.color = "#6b46c1"; // Purple text
                e.currentTarget.style.borderColor = "#6b46c1"; // Purple border
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#6b46c1"; // Original background color
                e.currentTarget.style.color = "white"; // Original text color
                e.currentTarget.style.borderColor = "transparent"; // Remove border color
              }}
            >
              {t("Join The Waiting List")}
            </a>
          </div>
        </div>
      </div>
      <JoinWaitingListPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Home;
