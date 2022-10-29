import React from "react";
import { ACTIONS } from "../App";

const ActionButton = ({ action, className, dispatch }) => {
  const actionClickHandler = () => {
    if (action === "C") {
      dispatch({ type: ACTIONS.CLEAR });
      return;
    }

    if (action === "=") {
      dispatch({ type: ACTIONS.EVALUATE });
      return;
    }

    if (action === "⇐") {
      dispatch({ type: ACTIONS.DELETE_DIGIT });
      return;
    }

    if (action === "±") {
      dispatch({ type: ACTIONS.CHANGE_POSITIVE });
      return;
    }

    if (["+", "-", "÷", "×"].includes(action)) {
      dispatch({
        type: ACTIONS.CHOOSE_OPERATION,
        payload: { operation: action },
      });
      return;
    }
  };

  return (
    <button className={`button ${className}`} onClick={actionClickHandler}>
      {action}
    </button>
  );
};

export default ActionButton;
