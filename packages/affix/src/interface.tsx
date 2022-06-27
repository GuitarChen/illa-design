import { ReactNode, CSSProperties, HTMLAttributes } from "react"

export interface AffixProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  style?: CSSProperties
  className?: string
  offsetTop?: number
  offsetBottom?: number
  target?: () => HTMLElement | null | Window
  targetContainer?: () => HTMLElement | null | Window
  children?: ReactNode
  onChange?: (isFixed: boolean) => void
}

export interface AffixFixedValue {
  isFixed: boolean
  position: PositionValue
  size: SizeValue
}

export interface PositionValue {
  type: "top" | "bottom"
  offset: number
}

export interface SizeValue {
  width: number
  height: number
}
