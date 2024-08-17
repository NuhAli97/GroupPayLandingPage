import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function App() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    const serviceID = "service_9x96oyc";
    const templateID = "template_imuhf0n";
    const userID = "3VDQC99rD3Cwcls8s";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        toast.success(<div>{t("Email sent successfully")}</div>);
      },
      (error) => {
        toast.error(<div>{t("Failed to send email")}</div>);
      }
    );
  };

  return (
    <>
      <form className="justify-center items-center" onSubmit={handleSubmit}>
        <p>{t("Name")} :</p>
        <input
          type="text"
          placeholder={t("Your Name")}
          className="contact-input-con"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <p>{t("Email")} :</p>
        <input
          type="email"
          placeholder={t("Your Email")}
          className="contact-input-con"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <p>{t("Message")} :</p>
        <textarea
          placeholder={t("Write Here....")}
          rows="5"
          className="contact-input-area"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>

        <button
          type="submit"
          className="secondary-button"
          style={{ width: "170px", marginTop: "1rem" }}
        >
          {t("Submit")}
        </button>
      </form>

      <ToastContainer />
    </>
  );
}
