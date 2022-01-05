import React from "react";

const TextInput = React.forwardRef(
  ({ placeholder, type, value, name, change, ...rest }, ref) => {
    return (
      <input
        type={type}
        className="bg-gray-light p-3 rounded-lg focus:outline-primary border-none "
        name={name}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default TextInput;
