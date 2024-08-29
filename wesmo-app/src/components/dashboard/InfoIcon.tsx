import React from "react";
import "./Icons.css";

const InfoIcon: React.FC = () => {
  function handleClick() {
    alert("You clicked me");
  }

  return (
    <div onClick={handleClick}>
      <i className="fa-solid fa-circle-info info_icon"></i>
    </div>
  );
};

export default InfoIcon;
