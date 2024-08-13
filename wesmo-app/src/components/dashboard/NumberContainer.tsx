import React from "react";
import "./NumberContainer.css";

interface Parameter {
  text: string;
  value: number | string;
  unit?: string;
}

interface Props {
  parameterOne: Parameter;
  bkg?: string;
  lightText?: boolean;
}

const NumberContainer: React.FC<Props> = ({
  parameterOne,
  bkg = "#ffffff",
  lightText = false,
}) => {
  const textColourClass = lightText ? "text--light" : "text--dark";
  return (
    <div className="number__container">
      <p className={`number__text-label ${textColourClass}`}>
        {parameterOne?.text}
      </p>
      <p className={`number__text-value ${textColourClass}`}>
        {parameterOne?.value}
        <span>{parameterOne?.unit}</span>
      </p>
    </div>
  );
};

export default NumberContainer;
