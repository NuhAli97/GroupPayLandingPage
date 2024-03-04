import React from "react";
import Group from "../Assets/group-image.png";
import ChooseItems from "../Assets/choose-image.png";
import Split from "../Assets/split-image.png";

const How = () => {
  const workInfoData = [
    {
      image: Group,
      title: "Make a group",
      text: "Create a group for an event by setting the event description, location, date and time. Don't forget to add your buddies!",
    },
    {
      image: ChooseItems,
      title: "Add items",
      text: "Add all items needed for the event. Assign it to friends or split the cost at the end.",
    },
    {
      image: Split,
      title: "Split the cost",
      text: "Once all members are added and it's time to proceed, distribute the money among users using different methods: equally, by percentage, or by a custom amount.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="HowItWorks" data-aos="fade-up">
      <div className="work-section-top">
        <h1 className="primary-heading" Style="font-size:37px;">Create Split For All Occasions</h1>
        <p className="secondary-text">
        From weekend getaways to office lunches or coffee runs,
                  GroupPay provides a seamless and transparent way to pool funds
                  for hassle-free transactions.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2 >{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
