/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * This component represents an individual item in the multi-select drop-down
 */
import React, { useRef } from 'react'

import { useKey } from '../../../../utils/use-key'
import { KEY } from '../constants'
import { Option } from '../interfaces'
import DefaultItemRenderer from './default-item'

interface ISelectItemProps {
  itemRenderer: any
  option: Option
  checked?: boolean
  tabIndex?: number
  disabled?: boolean
  onSelectionChanged: (checked: boolean) => void
}

const SelectItem = ({
  itemRenderer: ItemRenderer = DefaultItemRenderer,
  option,
  checked,
  tabIndex,
  disabled,
  onSelectionChanged,
}: ISelectItemProps) => {
  const itemRef: any = useRef()

  const onOptionCheck = (e: object | any) => {
    toggleChecked()
    e.preventDefault()
  }

  const toggleChecked = () => {
    if (!disabled) {
      onSelectionChanged(!checked)
    }
  }

  const handleClick = (e: object | any) => {
    toggleChecked()
  }

  useKey([KEY.ENTER, KEY.SPACE], onOptionCheck, { target: itemRef })

  return (
    <label
      className={`select-item ${checked && 'selected'}`}
      role="option"
      aria-selected={checked}
      tabIndex={tabIndex}
      ref={itemRef}
    >
      <ItemRenderer
        option={option}
        checked={checked}
        onClick={handleClick}
        disabled={disabled}
      />
    </label>
  )
}

export default SelectItem
