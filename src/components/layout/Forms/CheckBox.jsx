import React from "react";

const CheckBox = React.forwardRef(
  ({ placeholder, type, value, name, label, change, ...rest }, ref) => {
    return (
      <span className="flex items-center">
        <input
          type="checkbox"
          className="form-check-input appearance-none h-4 w-4 border-2 border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          name={name}
          ref={ref}
          {...rest}
        />
        <label htmlFor="remember" className="text-black text-sm">
          {label}
        </label>
      </span>
    );
  }
);

export default CheckBox;
