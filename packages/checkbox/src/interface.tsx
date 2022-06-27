import { ReactText, LabelHTMLAttributes, SyntheticEvent } from "react"

export type CheckboxColorScheme =
  | string
  | "gray"
  | "blue"
  | "purple"
  | "red"
  | "green"
  | "yellow"
  | "orange"
  | "cyan"
  | "white"
  | "techPink"
  | "techPurple"

export interface CheckboxProps<T extends ReactText = any>
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  value?: T
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean, event: SyntheticEvent) => void
  colorScheme?: CheckboxColorScheme
}

export interface CheckboxGroupContextProps<T extends ReactText = any> {
  disabled?: boolean
  isGroup: boolean
  checkboxGroupValue: ReactText[]
  onGroupChange?: (
    _optionValue: T,
    _checked: boolean,
    e: SyntheticEvent,
  ) => void
  registerValue?: (value: ReactText) => void
  unRegisterValue?: (value: ReactText) => void
}

export interface CheckboxGroupProps<T extends ReactText = any>
  extends Omit<
    LabelHTMLAttributes<HTMLDivElement>,
    "onChange" | "defaultValue"
  > {
  value?: T[]
  defaultValue?: T[]
  disabled?: boolean
  options?: (
    | T
    | {
        label?: string
        value?: string
        disabled?: boolean
      }
  )[]
  direction?: "vertical" | "horizontal"
  spacing?: string | number
  onChange?: (value: T[], event: SyntheticEvent) => void
  colorScheme?: CheckboxColorScheme
}
