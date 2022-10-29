import React from "react";

const Screen = ({ prev, operation, current }) => {
  return (
    <div className="screen">
      <div className="prev">
        {prev}
        {operation}
      </div>
      <div className="current">{current}</div>
    </div>
  );
};

export default Screen;
