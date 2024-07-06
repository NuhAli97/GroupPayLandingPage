import React from "react";
import Group from "../Assets/group-image.png";
import ChooseItems from "../Assets/choose-image.png";
import Split from "../Assets/split-image.png";
import { useTranslation } from "react-i18next";

const How = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const workInfoData = [
    {
      image: Group,
      title: t("Make a group"),
      text: t(
        "Create a group for an event by setting the event description, location, date and time. Don't forget to add your buddies!"
      ),
    },
    {
      image: ChooseItems,
      title: t("Add items"),
      text: t(
        "Add all items needed for the event. Assign it to friends or split the cost at the end."
      ),
    },
    {
      image: Split,
      title: t("Split the cost"),
      text: t(
        "Once all members are added and it's time to proceed, distribute the money among users using different methods: equally, by percentage, or by a custom amount."
      ),
    },
  ];
  return (
    <div className="work-section-wrapper" id="HowItWorks" data-aos="fade-up">
      <div className="work-section-top  mx-auto">
        <h1
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          Style="font-size:37px;"
        >
          {t("Create Split For All Occasions")}
        </h1>
        <p className="text-xl">
          {t(
            "From weekend getaways to office lunches or coffee runs, GroupPay provides a seamless and transparent way to pool funds for hassle-free transactions."
          )}
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div
            className="work-section-info bg-white rounded-lg shadow-xl p-6 hover:shadow-xl transition-shadow duration-300"
            key={data.title}
          >
            <img
              className="h-32 w-full object-contain mb-4 rounded-t-lg"
              src={data.image}
              alt={data.title}
            />
            <h2 className="text-xl font-semibold">{data.title}</h2>
            <p className="text-sm text-center text-gray-700">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
