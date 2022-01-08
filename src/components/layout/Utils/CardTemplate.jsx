import React from "react";

const CardTemplate = ({ children }) => {
  return (
    <div className="flex flex-col bg-white p-8 rounded-xl h-fit border border-gray-medium">
      {children}
    </div>
  );
};

export default CardTemplate;
