import React from "react";
import Minimum from "./Minimum";
const Temperature = ({ temp }) => {
  return (
    <div>
      {temp.Minimum.map(tempMin => (
        <Minimum tempMin={tempMin} />
      ))}
    </div>
  );
};

export default Temperature;
