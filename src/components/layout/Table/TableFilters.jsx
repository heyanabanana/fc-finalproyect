import React from "react";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  usePagination,
} from "react-table";
import LabelInput from "../Forms/LabelInput";
import SearchBar from "./SearchBar";
import SelectInput from "../Forms/SelectInput";
import CheckBox from "../Forms/CheckBox";
import { RadioButtons } from "../Forms/RadioButtons";

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

export function ExternalFilters({ data, setCountry, setCity, setRemote }) {
  return (
    <span className="flex flex-col bg-white p-10 rounded-xl">
      <span className="flex flex-col mb-5">
        <LabelInput label="País" htmlFor="Pais" />
        <SelectInput
          onChange={(e) => setCountry(e.target.value)}
          options={data.map((values) => {
            return (
              <option key={values.id} value={values.country}>
                {values.country}
              </option>
            );
          })}
        />
      </span>
      <span className="flex flex-col mb-5">
        <LabelInput label="Ciudad" htmlFor="Ciudad" />
        <SelectInput
          onChange={(e) => setCity(e.target.value)}
          options={data.map((values) => {
            return (
              <option key={values.id} value={values.city}>
                {values.city}
              </option>
            );
          })}
        />
      </span>
      <span className="flex flex-col mb-5">
        <LabelInput label="Presencial / a distancia " htmlFor="Remoto" />

        <RadioButtons label1="Presencial" label2="En remoto" onChange1={() => setRemote(false)} onChange2={() => setRemote(true)} name="remote"/>
      </span>
    </span>
  );
}
