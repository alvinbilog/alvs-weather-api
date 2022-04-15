import React from "react";
// import Value from "./Value";
const Minimum = ({ tempMin }) => {
  return (
    <div>
      {tempMin.Value.map(val => (
        <h1> {val.Value}</h1>
        // <Value val={val} />
      ))}
    </div>
  );
};

export default Minimum;
