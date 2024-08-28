/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../Assets/Logo.png";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import JoinWaitingListPopup from "./JoinWaitingListPopup";

const Footer = () => {
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
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex justify-around ">
          {/* Column 1: Address */}
          <div className="col-span-1 text-center ">
            <h4 className="text-lg font-semibold mb-4">{t("Address")}</h4>
            <ul className="space-y-2">
              <li>{t("AlAhsa-Hofuf")}</li>
            </ul>
          </div>

          {/* Column 2: Contact Us */}
          <div className="col-span-1 text-center ">
            <h4 className="text-lg font-semibold mb-4">{t("Contact Us")}</h4>
            <ul className="space-y-2">
              <li>info@grouppayapp.com</li>
            </ul>
          </div>

          {/* Column 3: Join us */}
          <div className="col-span-1 text-center">
            <h4 className="text-lg font-semibold mb-4">{t("Join us")}</h4>
            <ul className="space-y-2">
              <li
                onClick={openPopup}
                className="cursor-pointer hover:text-purple-600"
              >
                {t("Join The Waiting List")}
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="col-span-1 text-center ">
            <h4 className="text-lg font-semibold mb-4">{t("Follow us")}</h4>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/the.group.pay/?igsh=MXR0ZWNib3h4MXRhYQ%3D%3D"
                className="text-2xl hover:text-purple-600"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/group-pay-04b03b2b7/"
                className="text-2xl hover:text-purple-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FTheGroupPay"
                className="text-2xl hover:text-purple-600"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-center">
          <div className="flex space-x-4">
            {/* <a href="/terms" className="hover:text-purple-600">
              {t("Terms & Conditions")}
            </a>
            <a href="/privacy" className="hover:text-purple-600">
              {t("Privacy")}
            </a> */}
            <div>
              &copy;{new Date().getFullYear()} {t("All rights reserved")}
            </div>
          </div>
        </div>
      </div>

      <JoinWaitingListPopup isOpen={isPopupOpen} onClose={closePopup} />
    </footer>
  );
};

export default Footer;
