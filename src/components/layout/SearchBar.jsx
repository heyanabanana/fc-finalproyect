import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = (props) => {
  return (
    <span className="flex items-center min-w-content bg-gray-medium p-2 text-xs rounded-lg focus:outline-primary border-none ">
      <span className="mr-3 ml-1 text-pink">
        <SearchIcon className="w-5 " />
      </span>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={"Buscar por Nombre, Email o Palabra clave..."}
        className="placeholder:text-placeholder w-72 bg-gray-medium text-sm rounded-lg focus:outline-none border-none "
      />
    </span>
  );
};

export default SearchBar;
