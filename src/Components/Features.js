// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import trust from "../Assets/trust2.png";
import secure from "../Assets/secure2.png";
import efficient from "../Assets/efficient2.png";
import simple from "../Assets/simple2.png";
import phone15 from "../Assets/iPhone 15.png";
import phone16 from "../Assets/iPhone 16.png";
import phone17 from "../Assets/iPhone 17.png";
import phone18 from "../Assets/iPhone 18.png";
import phone19 from "../Assets/iPhone 19.png";
import Carousel from "react-material-ui-carousel";
import slider from "../Components/phoneslider.json";
import { Paper } from "@mui/material";
import Item from "../Components/item";
import { positions, width } from "@mui/system";
import FeaturesContent from "./FeaturesContent";

const Features = () => {
  return (
    <div className="features-container" id="Features" data-aos="fade-up">
      <div className="features-img">
        <Carousel>
          {slider.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Carousel>
      </div>

      <div className="features-right">
        <h1
          className="primary-heading"
          Style="font-size:37px; max-width:100%; "
        >
          QATTAH FEATURES
        </h1>
        <p
          className="secondary-text"
          id="features-right-p"
          Style="max-width:900px; padding-bottom:1rem;"
        >
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non.
        </p>
        <FeaturesContent />
      </div>
    </div>
  );
};

export default Features;
