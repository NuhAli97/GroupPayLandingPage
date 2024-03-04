import React from "react";
import useOpenController from "./useOpencontroller";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./FAQ.css";

export const Accordion = ({ section, key }) => {
    const { isOpen, toggle } = useOpenController(false);
  console.log(section);
  return (
    <div className="accordion-container">
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
      <div className="underline"></div>
    </div>
  );
};



export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className="column-container" onClick={toggle}>
      <div className="column-text">{question}</div>
      <button className="expendable-button">
      <span className="expandmoreicon">
      <ExpandMoreIcon/></span>
      </button>
    </div>
  );
};



export const TextSection = ({ text }) => {
  return (
    <div className="text-container">
      <div>{text}</div>
    </div>
  );
};