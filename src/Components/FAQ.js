import React, { useEffect } from "react";
import { data } from "./FAQData";
import { Accordion } from "./Accordion";
import Contactsection from "./Contactsection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export const FAQ = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center py-10">
      <div
        className="lg:w-1/2 max-w-xl text-center lg:text-left"
        data-aos="fade-up"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("CONTACT US")}
        </h1>
        <p className="text-lg md:text-xl mb-6 text-center">
          {t(
            "Have questions, feedback, or need assistance? We're here to help! Reach out to us through any of the methods below, and our team will get back to you as soon as possible."
          )}
        </p>
      </div>

      <div className="lg:w-1/2 w-96" data-aos="fade-up" data-aos-delay="200">
        <Contactsection />
      </div>
    </div>
  );
};

export default FAQ;
