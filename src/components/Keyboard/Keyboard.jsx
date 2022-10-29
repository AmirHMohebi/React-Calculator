import React from "react";
import ActionButton from "./ActionButton";
import DigitButton from "./DigitButton";

const Keyboard = ({ dispatch }) => {
  return (
    <>
      <div className="keyboard">
        <ActionButton
          action={"C"}
          dispatch={dispatch}
          className="first-row span-two"
        />
        <ActionButton action={"±"} dispatch={dispatch} className="first-row" />
        <ActionButton action={"÷"} dispatch={dispatch} className="operation" />
        <DigitButton digit={7} dispatch={dispatch} />
        <DigitButton digit={8} dispatch={dispatch} />
        <DigitButton digit={9} dispatch={dispatch} />
        <ActionButton action={"×"} dispatch={dispatch} className="operation" />
        <DigitButton digit={4} dispatch={dispatch} />
        <DigitButton digit={5} dispatch={dispatch} />
        <DigitButton digit={6} dispatch={dispatch} />
        <ActionButton action={"-"} dispatch={dispatch} className="operation" />
        <DigitButton digit={1} dispatch={dispatch} />
        <DigitButton digit={2} dispatch={dispatch} />
        <DigitButton digit={3} dispatch={dispatch} />
        <ActionButton action={"+"} dispatch={dispatch} className="operation" />
        <DigitButton digit={0} dispatch={dispatch} />
        <DigitButton digit={"."} dispatch={dispatch} />
        <ActionButton action={"⇐"} dispatch={dispatch} className="operation" />
        <ActionButton action={"="} dispatch={dispatch} className="evaluate" />
      </div>
    </>
  );
};

export default Keyboard;
