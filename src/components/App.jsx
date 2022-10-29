import React, { useReducer } from "react";
import Keyboard from "./Keyboard/Keyboard";
import Screen from "./Screen/Screen";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
  CHANGE_POSITIVE: "change-positive",
};

const calculate = (state) => {
  const { operation, prev, current } = state;
  const prevDigit = +prev;
  const currentDigit = +current;
  switch (operation) {
    case "+":
      return prevDigit + currentDigit;
    case "-":
      return prevDigit - currentDigit;
    case "×":
      return prevDigit * currentDigit;
    case "÷":
      return prevDigit / currentDigit;
    default:
      return "";
  }
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === 0 && state.current === "0") return state;
      if (payload.digit === "." && state.current.includes(".")) return state;
      if (state.overWrite) {
        return { ...state, current: payload.digit, overWrite: false };
      }
      return { ...state, current: `${state.current || ""}${payload.digit}` };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.CHOOSE_OPERATION:
      if (state.current == null && state.prev == null) return state;
      if (state.prev == null) {
        return {
          ...state,
          operation: payload.operation,
          prev: state.current,
          current: "",
        };
      }
      return {
        ...state,
        operation: payload.operation,
        prev: calculate(state),
        current: null,
      };
    case ACTIONS.EVALUATE:
      if (state.current == null || state.prev == null) return state;
      return {
        ...state,
        operation: null,
        prev: null,
        current: calculate(state),
        overWrite: true,
      };
    case ACTIONS.DELETE_DIGIT:
      if (state.overWrite) {
        return {
          ...state,
          current: null,
          overWrite: false,
        };
      }

      if (state.current == null) return state;
      if (state.current.length === 1) {
        return {
          ...state,
          current: null,
        };
      }
      return {
        ...state,
        current: state.current.slice(0, -1),
      };
    case ACTIONS.CHANGE_POSITIVE:
      if (state.current && !state.overWrite) {
        return { ...state, current: -state.current };
      }
      return state;
    default:
      return state;
  }
};

const App = () => {
  const [{ current, prev, operation }, dispatch] = useReducer(reducer, {});

  return (
    <>
      <main>
        <Screen prev={prev} operation={operation} current={current} />
        <Keyboard dispatch={dispatch} />
      </main>
    </>
  );
};

export default App;
