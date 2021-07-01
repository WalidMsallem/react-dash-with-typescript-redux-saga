import './style.scss'

import React from 'react'

import { MultiSelectProvider } from './use-multi-select'
import { ISelectProps } from './interfaces'
import Dropdown from './drop-down'

const MultiSelect = (props: ISelectProps) => (
  <MultiSelectProvider props={props}>
    <div className={`rmsc ${props.className || 'multi-select'}`}>
      <Dropdown />
    </div>
  </MultiSelectProvider>
)

export default MultiSelect
