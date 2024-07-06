import React from "react";
import { Linking } from "react-native";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <form className="justify-center items-center">
      <p>{t("Name")} :</p>
      <input
        type="text"
        placeholder={t("Your Name")}
        className="contact-input-con"
      />
      <p>{t("Email")} :</p>
      <input
        type="email"
        placeholder={t("Your Email")}
        className="contact-input-con"
      />
      <p>{t("Message")} :</p>
      <textarea
        placeholder={t("Write Here....")}
        rows="5"
        className="contact-input-area"
      ></textarea>

      <button
        className="secondary-button"
        Style="width:170px; margin-top:1rem"
        onClick={() => openEmail()}
      >
        {t("Submit")}
      </button>
    </form>
  );
}

const openEmail = () => {
  Linking.openURL("mailto: the.group.pay@gmail.com");
};
