import React from "react";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
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
import {
  TrashIcon,
  SearchIcon,
  SwitchVerticalIcon,
  PlusSmIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Button, PageButton } from "../Buttons/ButtonPage";

//BUSQUEDA GLOBAL
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="flex items-center min-w-content bg-gray-medium p-2 text-xs rounded-lg focus:outline-primary border-none ">
      <span className="mr-3 ml-1 text-pink">
        <SearchIcon className="w-5 " />
      </span>
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={"Buscar por Nombre, Email o Palabra clave..."}
        className="placeholder:text-placeholder w-72 bg-gray-medium text-sm rounded-lg focus:outline-none border-none "
      />
    </span>
  );
}

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    state: { pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
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

  return (
    <span className="bg-gray-light h-full w-screen flex flex-col lg:flex-row items-evenly">
      <span className="flex flex-col  pl-10 w-full p-5">
        <span className="flex mb-3 items-start md:items-center justify-between flex-col sm:flex-row ">
          <span className="flex items-start md:items-center flex-col sm:flex-row m-1">
            <h1 className="font-semibold mr-6">Alumnos</h1>
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={pageIndex.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />{" "}
          </span>
          <button className="bg-white font-semibold px-4 py-2 rounded-lg border border-gray-medium flex items-center hover:bg-gray-light">
            <PlusSmIcon className="w-5 mr-3" />
            Añadir alumno
          </button>
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
                          {cell.render("Cell")}
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
          <div className="hidden pagination w-auto md:flex justify-between px-6 py-3">
            <span className="flex w-auto  items-center justify-start">
              <span className="w-3/5 pl-5 pr-5">
                Page
                <strong className="pl-2">
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
              <select
                className="bg-gray-light p-3 rounded-lg focus:outline-primary border-none pr-8"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Mostrar {pageSize}
                  </option>
                ))}
              </select>
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
