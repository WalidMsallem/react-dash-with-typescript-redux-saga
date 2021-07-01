/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates, the
 * Select-all item, and the list of options.
 */
import React, { useMemo, useRef } from 'react'

import { useMultiSelect } from '../use-multi-select'

import SelectItem from './select-item'
import SelectList from './select-list'

const SelectPanel = () => {
  const {
    renderMessage,
    onChange,
    options,
    value,
    selectAllLabel,
    ItemRenderer,
    disabled,
    hasSelectAll,
  } = useMultiSelect()

  const listRef = useRef<any>()
  const selectAllOption = {
    label: selectAllLabel || renderMessage('selectAll'),
    value: '',
  }

  const selectAllValues = (checked: boolean) => {
    const filteredValues = options
      .filter((o: { disabled: boolean } | any) => !o.disabled)
      .map((o: { value: string } | any) => o.value)

    if (checked) {
      const selectedValues = value.map((o: { value: string } | any) => o.value)
      const finalSelectedValues = [...selectedValues, ...filteredValues]

      return options.filter((o: { value: string } | any) =>
        finalSelectedValues.includes(o.value),
      )
    }

    return value.filter(
      (o: { value: string } | any) => !filteredValues.includes(o.value),
    )
  }

  const selectAllChanged = (checked: boolean) => {
    const newOptions = selectAllValues(checked)
    onChange(newOptions)
  }

  const [isAllOptionSelected, hasSelectableOptions] = useMemo(() => {
    const filteredOptionsList = options.filter(
      (o: { disabled: number } | any) => !o.disabled,
    )
    return [
      filteredOptionsList.every(
        (o: { value: string } | any) =>
          value.findIndex(
            (v: { value: number } | any) => v.value === o.value,
          ) !== -1,
      ),
      filteredOptionsList.length !== 0,
    ]
    // eslint-disable-next-line
  }, [options, value])

  return (
    <div className="select-panel" role="listbox" ref={listRef}>
      <ul className="options">
        {hasSelectAll && hasSelectableOptions && (
          <SelectItem
            tabIndex={-1}
            checked={isAllOptionSelected}
            option={selectAllOption}
            onSelectionChanged={selectAllChanged}
            itemRenderer={ItemRenderer}
            disabled={disabled}
          />
        )}

        {options.length ? (
          <SelectList options={options} />
        ) : (
          <li className="no-options">{renderMessage('noOptions')}</li>
        )}
      </ul>
    </div>
  )
}

export default SelectPanel
