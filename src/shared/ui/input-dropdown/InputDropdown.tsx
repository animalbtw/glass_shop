"use client";

import Select from "react-dropdown-select";
import { InputDropdownProps } from "./inputDropdown.types";

export default function InputDropdown(props: InputDropdownProps) {
  const {
    options,
    placeholder,
    labelField,
    valueField,
    isDisabled = false,
  } = props;

  return (
    <Select
      disabled={isDisabled}
      placeholder={placeholder}
      options={options}
      labelField={labelField}
      valueField={valueField}
      onChange={(value) => console.log(value)}
      searchable={false}
      closeOnScroll
      closeOnSelect
    />
  );
}
