import { ReactNode } from "react";

export interface Option {
  value:number|string;
  label: string;
  key?: string;
  disabled?: boolean;
}

export interface ISelectProps {
  options: Option[];
  value: Option[];
  onChange?:any;
  valueRenderer?: (selected: Option[], options: Option[]) => ReactNode;
  ItemRenderer?: Function;
  ArrowRenderer?: ({ expanded}:any) => JSX.Element;
  selectAllLabel?: string;
  disabled?: boolean;
  shouldToggleOnHover?: boolean;
  hasSelectAll?: boolean;
  overrideStrings?: { [key: string]: string };
  labelledBy: string;
  className?: string;
  onMenuToggle?:Function;
  ClearSelectedIcon?: ReactNode;
  defaultIsOpen?: boolean;
  isOpen?: boolean;
  listTitle?: string;
}
