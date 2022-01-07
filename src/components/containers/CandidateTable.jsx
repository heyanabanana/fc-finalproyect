import React from "react";
import Table from "../layout/Table/Table";
import { TagPill, dontShow, FullName } from "../layout/Table/TableTemplates";
import candidateData from "../../data/CANDIDATESDATA.json";

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
      },
      {
        Header: "País",
        accessor: "country",
        isSortable: true,
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
      },
      {
        accessor: "mobility",
        Cell: dontShow,
      },
    ],
    []
  );

  const data = React.useMemo(() => candidateData, []);
  return <Table columns={columns} data={data} />;
};

export default Candidatetable;
