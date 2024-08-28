import React from "react";
import { useTranslation } from "react-i18next";
import { FaUsers, FaList, FaDollarSign } from "react-icons/fa";

const How = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const workInfoData = [
    {
      icon: <FaUsers size={60} className="text-purple-600" />, // Group icon
      title: t("Make a group"),
      text: t(
        "Create a group for an event by setting the event description, location, date and time. Don't forget to add your buddies!"
      ),
    },
    {
      icon: <FaList size={60} className="text-purple-600" />, // List icon
      title: t("Add items"),
      text: t(
        "Add all items needed for the event. Assign it to friends or split the cost at the end."
      ),
    },
    {
      icon: <FaDollarSign size={60} className="text-purple-600" />, // Dollar sign icon
      title: t("Split the cost"),
      text: t(
        "Once all members are added and it's time to proceed, distribute the money among users using different methods: equally, by percentage, or by a custom amount."
      ),
    },
  ];
  return (
    <div className="work-section-wrapper" id="HowItWorks" data-aos="fade-up">
      <div className="work-section-top mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {t("Create Split For All Occasions")}
        </h1>
        <p className="text-xl">
          {t(
            "From weekend getaways to office lunches or coffee runs, GroupPay provides a seamless and transparent way to pool funds for hassle-free transactions."
          )}
        </p>
      </div>
      <div className="work-section-bottom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-6">
        {workInfoData.map((data) => (
          <div
            className="work-section-info bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-purple-500"
            key={data.title}
          >
            <div className="flex justify-center mb-2">
              <div className="p-2">{data.icon}</div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1 transition-colors duration-300 ease-in-out hover:text-purple-600">
              {data.title}
            </h2>
            <p className="text-sm text-center text-gray-700">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
