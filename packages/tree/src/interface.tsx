import { HTMLAttributes, ReactNode } from "react"

export type TagColorScheme =
  | string
  | "white"
  | "blackAlpha"
  | "gray"
  | "grayBlue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"

export type TagVariant = "outline" | "fill" | "light"

export type TagSize = "small" | "medium" | "large"

export interface TreeProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string
}
