import React from "react";
import { useAsyncDebounce } from "react-table";
import LabelInput from "../Forms/LabelInput";
import SearchBar from "./SearchBar";
import SelectInput from "../Forms/SelectInput";
import { RadioButtons } from "../Forms/RadioButtons";
import DataList from "../Forms/DataListInput";
import TagGray from "../Tags/TagGray";
import CardTitle from "../Utils/CardTitle";
import { XIcon, TrashIcon } from "@heroicons/react/outline";
import CardTemplate from "../Utils/CardTemplate";

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

export function ExternalFilters({
  data,
  setCountry,
  setCity,
  setRemote,
  setMobility,
  skills,
  skillsData,
  setSkills,
  clearFilters,
}) {
  const onSelect = (e) => {
    setSkills((skills) => [...skills, e.label]);
  };

  const deleteSkill = (i) => {
    setSkills(skills.filter((item) => item.label !== i.label));
  };

  return (
    <CardTemplate>
      <span className="hidden sm:flex sm:flex-col ">
        <CardTitle
          text="Filtros de búsqueda"
          icon={<TrashIcon className="w-5 text-primary" />}
          onClick={clearFilters}
        />
        <span className="mb-6">
          <DataList values={skillsData} onSelect={onSelect} />
          <span className="flex">
            {skills &&
              skills.map((skill) => (
                <TagGray
                  key={skill}
                  skill={skill}
                  icon={<XIcon className="w-4" />}
                  onClick={() => {
                    deleteSkill(skill);
                  }}
                />
              ))}
          </span>
        </span>
        <SelectInput
          label="País"
          htmlFor="Pais"
          onChange={(e) => setCountry(e.target.value)}
          options={data.map((values) => {
            return (
              <option key={values.id} value={values.country}>
                {values.country}
              </option>
            );
          })}
        />
        <SelectInput
          label="Ciudad"
          htmlFor="Ciudad"
          onChange={(e) => setCity(e.target.value)}
          options={data.map((values) => {
            return (
              <option key={values.city} value={values.city}>
                {values.city}
              </option>
            );
          })}
        />
        <RadioButtons
          label="Presencial / a distancia"
          htmlFor="Traslado"
          label1="Presencial"
          label2="En remoto"
          onChange1={() => setRemote(false)}
          onChange2={() => setRemote(true)}
          name="remote"
        />

        <RadioButtons
          label="Posibilidad traslado "
          htmlFor="Traslado"
          label1="Si"
          label2="No"
          onChange1={() => {
            setMobility(true);
          }}
          onChange2={() => setMobility(false)}
          name="mobility"
        />
      </span>
    </CardTemplate>
  );
}
