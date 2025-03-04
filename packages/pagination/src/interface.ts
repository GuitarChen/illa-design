import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"
import { SelectProps } from "@illa-design/select"

export type PaginationSize = "small" | "medium" | "large"
export type PaginationItemType = "page" | "more" | "prev" | "next"

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    BoxProps {
  disabled?: boolean
  hideOnSinglePage?: boolean
  pageSizeChangeResetCurrent?: boolean
  showJumper?: boolean
  showMore?: boolean
  simple?: boolean
  sizeCanChange?: boolean
  bufferSize?: number
  current?: number
  defaultCurrent?: number
  pageSize?: number
  defaultPageSize?: number
  total?: number
  itemRender?: (
    page: number,
    type: PaginationItemType,
    originElement: ReactNode,
  ) => ReactNode
  size?: PaginationSize
  icons?: { prev?: ReactNode; next?: ReactNode; more?: ReactNode }
  onChange?: (pageNumber: number, pageSize: number) => void
  onPageSizeChange?: (size: number, current: number) => void
  showTotal?: boolean | ((total: number, range: number[]) => ReactNode)
}
