import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const JoinWaitingListPopup = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      ...formData,
      message: "Waiting list request", // Fixed message
    };

    const serviceID = "service_9x96oyc";
    const templateID = "template_8cxabop";
    const userID = "3VDQC99rD3Cwcls8s";

    emailjs.send(serviceID, templateID, emailData, userID).then(
      (response) => {
        if (response.status === 200) {
          toast.success(t("Email sent successfully"));
          //onClose(); // Close the modal on success
          setFormData({ name: "", email: "" }); // Clear the form fields
        } else {
          toast.error(t("Failed to send email"));
        }
      },
      (error) => {
        toast.error(t("Failed to send email"));
      }
    );
  };

  const handleClose = () => {
    setFormData({ name: "", email: "" }); // Clear the form fields when popup is closed
    onClose();
  };

  if (!isOpen) return null;

  const isFormValid =
    formData.name.trim() !== "" && formData.email.trim() !== "";

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          zIndex: 1000,
          width: "40%",
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#6b46c1",
            width: "30px",
          }}
        >
          &times;
        </button>
        <h3
          style={{ marginBottom: "1rem", textAlign: "center", color: "black" }}
        >
          {t("Join The Waiting List")}
        </h3>
        <form onSubmit={handleSubmit}>
          <p
            style={{
              marginBottom: "1rem",
              color: "black",
            }}
          >
            {t("Name")} :
          </p>
          <input
            type="text"
            placeholder={t("Your Name")}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              color: "black",
            }}
          />
          <p
            style={{
              marginBottom: "1rem",
              color: "black",
            }}
          >
            {t("Email")} :
          </p>
          <input
            type="email"
            placeholder={t("Your Email")}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              color: "black",
            }}
          />
          <button
            type="submit"
            disabled={!isFormValid}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: isFormValid ? "#6b46c1" : "#d3d3d3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
          >
            {t("Submit")}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default JoinWaitingListPopup;
