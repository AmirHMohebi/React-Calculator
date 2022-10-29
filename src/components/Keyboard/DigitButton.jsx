import React from "react";
import { ACTIONS } from "../App";

const DigitButton = ({ digit, dispatch }) => {
  const digitClickHandler = () => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: digit } });
  };

  return (
    <button className="button number" onClick={digitClickHandler}>
      {digit}
    </button>
  );
};

export default DigitButton;
