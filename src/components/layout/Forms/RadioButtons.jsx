import React from "react";

export const RadioButtons = (props) => {
  return (
    <span className="flex flex-col">
      <span className="flex items-center mb-2">
        <input
          type="radio"
          className="form-check-input appearance-none h-4 w-4 border-2 border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          onChange={props.onChange1}
          name={props.name}
        />
        <label htmlFor={props.name} className="text-black text-sm">
          {props.label1}
        </label>
      </span>
      <span className="flex items-center">
        <input
          type="radio"
          className="form-check-input appearance-none h-4 w-4 border-2 border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          onChange={props.onChange2}
          name={props.name}
        />
        <label htmlFor={props.name} className="text-black text-sm">
          {props.label2}
        </label>
      </span>
    </span>
  );
};
