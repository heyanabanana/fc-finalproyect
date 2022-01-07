import React from "react";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  usePagination,
} from "react-table";
import SearchBar from "./SearchBar";

export function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <SearchBar
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      value={value || ""}
    />
  );
}
