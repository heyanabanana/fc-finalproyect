import React, { useEffect, useState } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useFilters,
  usePagination,
} from "react-table";

import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import { SwitchVerticalIcon, PlusSmIcon } from "@heroicons/react/outline";

//COMPONENTS
import { Button, PageButton } from "../Buttons/ButtonPage";
import { GlobalFilter } from "./TableFilters";
import BoldTitle from "../Utils/BoldTitle";
import ButtonWhite from "../Buttons/ButtonWhite";
import SelectInput from "../Forms/SelectInput";
import { Link } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import NewCandidate from "../../containers/NewCandidate";

const Table = ({
  columns,
  data,
  cityFilter,
  countryFilter,
  remoteFilter,
  mobilityFilter,
  skillsFilter,
}) => {
  const {
    getTableProps,
    state: { pageIndex },
    preGlobalFilteredRows,
    setGlobalFilter,
    setFilter,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );
  useEffect(() => {
    // This will now use our custom filter for age
    setFilter("city", cityFilter);
    setFilter("country", countryFilter);
    setFilter("remote", remoteFilter);
    setFilter("mobility", mobilityFilter);
    setFilter("skills", skillsFilter);
  }, [
    cityFilter,
    countryFilter,
    mobilityFilter,
    remoteFilter,
    setFilter,
    skillsFilter,
  ]);

  const [displayNewCandidate, setdisplayNewCandidate] = useState(false);
  const dialogFuncMap = {
    displayNewCandidate: setdisplayNewCandidate,
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);
  };

  return (
    <span className="flex flex-col lg:flex-row items-evenly h-full bg-gray-light overflow-auto ">
      <span className="flex flex-col  pl-10 w-full p-5">
        <span className="flex mb-3 items-start md:items-center justify-between flex-col sm:flex-row ">
          <span className="flex items-start md:items-center flex-col sm:flex-row m-1">
            <BoldTitle text="Alumnos" />
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={pageIndex.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />{" "}
          </span>
          <ButtonWhite
            text="Añadir alumno"
            icon={<PlusSmIcon className="w-5 mr-3" />}
            onClick={() => onClick("displayNewCandidate")}
          />
          <Dialog
            header="Añadir Alumno"
            visible={displayNewCandidate}
            maximizable
            modal
            style={{
              height: "fit-content",
              borderRadius: "20px",
              overflow: "hidden",
              fontFamily: "Raleway",
            }}
            onHide={() => onHide("displayNewCandidate")}
          >
            <NewCandidate onHide={() => onHide("displayNewCandidate")} />
          </Dialog>
        </span>
        <span className=" rounded-xl bg-white overflow-x-auto overflow-hidden border border-gray-medium sm:rounded-xl">
          <table
            className=" divide-y divide-gray-medium w-full"
            {...getTableProps()}
          >
            <thead className=" w-fit bg-white">
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className=" items-center"
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      className="pl-10 px-4 py-3 text-left text-xs font-semibold text-gray-dark uppercase tracking-wider"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <span className="flex items-center">
                        {column.render("Header")}
                        {column.isSortable ? (
                          <SwitchVerticalIcon className="w-4 ml-1" />
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-gray-200 text-sm"
            >
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="pl-10 px-4 py-3 whitespace-nowrap"
                        >
                          {" "}
                          <Link
                            to={`/dashboard/candidate/${cell.row.id}`}
                            id={cell.row.id}
                          >
                            {cell.render("Cell")}
                          </Link>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex-1 flex justify-between md:hidden px-6 py-3">
            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Anterior
            </Button>
            <Button onClick={() => nextPage()} disabled={!canNextPage}>
              Siguiente
            </Button>
          </div>
          <div className="hidden pagination w-auto md:flex justify-between px-6 py-3 items-center mt-10">
            <span className="flex w-auto  items-center justify-start">
              <span className="w-56">
                Pagina
                <strong className="pl-2">
                  {pageIndex + 1} de {pageOptions.length}
                </strong>{" "}
              </span>
              <span className="-m-8 w-36 ">
                <SelectInput
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                  options={[5, 10, 15].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Mostrar {pageSize}
                    </option>
                  ))}
                />
              </span>
            </span>
            <span>
              <PageButton
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <ChevronDoubleRightIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </PageButton>
            </span>
          </div>
        </span>
      </span>
    </span>
  );
};

export default Table;
