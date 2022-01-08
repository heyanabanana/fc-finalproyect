import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
const Backbutton = () => {
  return (
    <button className="flex items-center font-bold mb-3">
      <ArrowLeftIcon className="w-5 mr-3 " /> Volver
    </button>
  );
};

export default Backbutton;
