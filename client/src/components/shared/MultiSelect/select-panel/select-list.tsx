/**
 * This component represents an unadorned list of SelectItem (s).
 */
import React from "react";

import { useMultiSelect } from "../use-multi-select";
import { Option } from "../interfaces";
import SelectItem from "./select-item";

interface ISelectListProps {
  options: Option[]; 
}

const SelectList = ({ options, 
 }: ISelectListProps) => {
  const { disabled, value, onChange, ItemRenderer } = useMultiSelect();

  const handleSelectionChanged = (option: Option, checked: boolean) => {
    if (disabled) return;

    onChange(
      checked
        ? [...value, option]
        : value.filter((o: any) => o.value !== option.value)
    );
  };

  return (
    <>
      {options.map((o: any, i) => {
        return (
          <li key={o?.key || i}>
            <SelectItem
              tabIndex={i}
              option={o}
              onSelectionChanged={(c) => handleSelectionChanged(o, c)}
              itemRenderer={ItemRenderer}
              checked={!!value.find((s:any) => s.value === o.value)}
              disabled={o.disabled || disabled}
            />
          </li>
        );
      })}
    </>
  );
};

export default SelectList;
