import { HTMLAttributes, ReactNode } from "react"

export type CardSize = "small" | "medium"

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  size?: CardSize
  hoverable?: boolean
  loading?: boolean
  bordered?: boolean
  cover?: ReactNode
  title?: ReactNode
  actions?: ReactNode[]
  extra?: ReactNode
  isGridMode?: boolean
}

export interface CardMetaProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  avatar?: ReactNode
  title?: ReactNode
  description?: ReactNode
  actionList?: ReactNode[]
}

export interface CardGridProps extends HTMLAttributes<HTMLElement> {
  hoverable?: boolean
}
