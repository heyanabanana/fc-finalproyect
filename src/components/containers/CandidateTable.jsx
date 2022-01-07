import React, { useState } from "react";
import Table from "../layout/Table/Table";
import { TagPill, dontShow, FullName } from "../layout/Table/TableTemplates";
import candidateData from "../../data/CANDIDATESDATA.json";
import SelectInput from "../layout/Forms/SelectInput";
import LabelInput from "../layout/Forms/LabelInput";
import { ExternalFilters } from "../layout/Table/TableFilters";

const customCityFilter = (rows, id, filterValue) =>
  rows.filter((row) => row.original.city === filterValue);
const customCountryFilter = (rows, id, filterValue) =>
  rows.filter((row) => row.original.country === filterValue);
const customRemoteFilter = (rows, id, filterValue) =>
  rows.filter((row) => row.original.remote === filterValue);
const customMobilityFilter = (rows, id, filterValue) =>
  rows.filter((row) => row.original.remote === filterValue);

const Candidatetable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "fullname",
        isSortable: true,
        Cell: FullName,
      },
      {
        Header: "Ciudad",
        accessor: "city",
        isSortable: true,
        filter: customCityFilter,
      },
      {
        Header: "País",
        accessor: "country",
        isSortable: true,
        filter: customCountryFilter,
      },
      {
        Header: "Teléfono",
        accessor: "phone",
      },
      {
        Header: "Correo electrónico",
        accessor: "email",
        isSortable: true,
      },

      {
        Header: "Etiquetas",
        id: (data) => data.skills.map((skill) => skill.id),
        accessor: (data) => data.skills.map((skill) => skill.name),
        Cell: TagPill,
        isSortable: true,
      },
      {
        accessor: "remote",
        Cell: dontShow,
        filter: customRemoteFilter,
      },
      {
        accessor: "mobility",
        Cell: dontShow,
        filter: customMobilityFilter,

      },
    ],
    []
  );
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [remote, setRemote] = useState();
  const [mobility, setMobility] = useState();

  const data = React.useMemo(() => candidateData, []);

  return (
    <span className="bg-gray-light w-full h-full">
      <ExternalFilters
        data={data}
        setCity={setCity}
        setCountry={setCountry}
        setRemote={setRemote}
        setMobility={setMobility}
      />
      <Table
        columns={columns}
        data={data}
        cityFilter={city}
        countryFilter={country}
        remoteFilter={remote}
        mobilityFilter={mobility}
      />
      {console.log(remote)}
    </span>
  );
};

export default Candidatetable;
