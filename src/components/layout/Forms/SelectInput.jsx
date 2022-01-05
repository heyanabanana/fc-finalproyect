import React from "react";

const SelectInput = (props) => {
  return (
    <select className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none ">
      {props.options}
    </select>
  );
};

export default SelectInput;
