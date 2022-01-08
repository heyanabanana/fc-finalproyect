import React from "react";

const SelectInput = React.forwardRef(
  (
    {
      htmlFor,
      onChange,
      options,
      label,
      placeholder,
      type,
      value,
      name,
      change,
      ...rest
    },
    ref
  ) => {
    return (
      <span className="flex flex-col mb-8 pr-5 w-full">
        <label htmlFor={htmlFor} className="text-black font-semibold mb-3">
          {label}
        </label>
        <select
          onChange={onChange}
          className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none "
          name={name}
          ref={ref}
          {...rest}
        >
          {options}
        </select>
      </span>
    );
  }
);

export default SelectInput;
