import React from "react";

import { useMultiSelect } from "../use-multi-select";

export const DropdownHeader = () => {
  const { renderMessage, value, options, valueRenderer,listTitle } = useMultiSelect();
console.log('zabzoub', listTitle)
  const noneSelected = value.length === 0;
  const allSelected = value.length === options.length;
  const customText = valueRenderer && valueRenderer(value, options);

  const getSelectedText = () => value.map((s) => s.label).join(", ");
  return noneSelected ? (
    <span className="gray">{customText || renderMessage("selectSomeItems")}</span>
  ) : (
    <span>
      {customText ||
        (allSelected ? `${renderMessage("allItemsAreSelected")} ${listTitle ||'values' }` : getSelectedText())}
    </span>
  );
};
