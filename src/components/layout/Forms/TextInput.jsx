import React from "react";

const TextInput = React.forwardRef(
  (
    {
      htmlFor,
      defaultValue,
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
      <span className="flex flex-col mb-8">
        <label htmlFor={htmlFor} className="text-black font-semibold mb-3">
          {label}
        </label>
        <input
          defaultValue={defaultValue}
          type={type}
          className="bg-gray-light p-3 rounded-lg focus:outline-primary border-none "
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </span>
    );
  }
);

export default TextInput;
