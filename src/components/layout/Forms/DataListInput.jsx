import React, { useMemo } from "react";
import DataListInput from "react-datalist-input";
import LabelInput from "./LabelInput";
import "../../../styles/DataList.css";

const DataList = ({ values, onSelect }) => {
  const items = useMemo(
    () =>
      values.map((oneItem) => ({
        label: oneItem.name,
        key: oneItem.id,
      })),
    [values]
  );

  return (
    <span>
      <LabelInput label="Etiquetas" />
      <DataListInput
        placeholder="Escribe para buscar..."
        items={items}
        onSelect={onSelect}
        clearInputOnSelect={true}
        inputClassName="dataListInput"
        dropdownClassName="dataListDropdown"
        activeItemClassName="dataListActive"
        itemClassName="dataListItem"
      />
    </span>
  );
};

export default DataList;
