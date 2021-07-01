import React from 'react'

import { ISelectProps, Option } from './interfaces'

const defaultStrings: any = {
  allItemsAreSelected: 'All ',
  noOptions: 'No options',
  selectAll: 'Select All',
  selectSomeItems: 'Select...',
}

const defaultProps: Partial<ISelectProps> = {
  value: [],
  hasSelectAll: true,
  className: 'multi-select',
  options: [] as Option[],
}

interface MultiSelectContextProps extends ISelectProps {
  renderMessage: (key: string) => string
}

interface MultiSelectProviderProps {
  props: ISelectProps
  children: JSX.Element
}

const MultiSelectContext = React.createContext<MultiSelectContextProps>(
  {} as MultiSelectContextProps,
)

export const MultiSelectProvider = ({
  props,
  children,
}: MultiSelectProviderProps) => {
  const renderMessage = (key: string) =>
    props.overrideStrings?.[key] || defaultStrings[key]
  console.log('props', props)
  return (
    <MultiSelectContext.Provider
      value={{ renderMessage, ...defaultProps, ...props }}
    >
      {children}
    </MultiSelectContext.Provider>
  )
}

export const useMultiSelect = () => React.useContext(MultiSelectContext)
