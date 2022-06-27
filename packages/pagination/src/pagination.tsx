import * as React from "react"
import { forwardRef, ReactNode, useContext, useEffect, useState } from "react"
import { PaginationProps } from "./interface"

import { MoreIcon, NextIcon, PreIcon } from "@illa-design/icon"
import {
  applyDefaultItemCss,
  applyDefaultItemWithMarginCss,
  paginationContainer,
  totalTextCss,
} from "./style"
import { PageNumGroup } from "./page-num-group"
import { JumperInput } from "./jump-input"
import { PageSizeSelector } from "./page-size-selector"
import { SimplePagination } from "./simple-pagination"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const {
      currentPage,
      pageSize,
      total = 0,
      defaultCurrent = 1,
      defaultPageSize = 10,
      disabled,
      hideOnSinglePage = true,
      size = "medium",
      showTotal,
      sizeCanChange = true,
      sizeOptions = [10, 20, 30, 40, 50],
      simple,
      showJumper,
      placeholder,
      onChange,
      onPageSizeChange,
      prevIcon,
      nextIcon,
      moreIcon,
      ...otherProps
    } = props

    const [curPage, setCurPage] = useState(defaultCurrent - 1)
    const [itemCount, setItemCount] = useState(defaultPageSize)
    const curPageVal = currentPage ?? curPage
    const itemCountVal = pageSize ?? itemCount

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )
    const locale = configProviderProps?.locale?.pagination ?? def.pagination

    const totalText = locale["total"]

    let pageSum: number
    if (total <= 0) {
      pageSum = 0
    } else {
      pageSum = Math.ceil(total / itemCountVal)
    }

    useEffect(() => {
      onPageSizeChange?.(itemCountVal, curPageVal + 1)
    }, [itemCount])

    useEffect(() => {
      onChange?.(curPageVal + 1, itemCountVal)
    }, [curPage])

    const prevDisable = curPage == 0 || disabled || pageSum == 0
    const nextDisable = curPage == pageSum - 1 || disabled || pageSum == 0

    if (hideOnSinglePage && pageSum == 1) {
      return <></>
    }

    let totalElement: ReactNode = null
    if (typeof showTotal === "boolean" && showTotal) {
      totalElement = (
        <span css={totalTextCss}>
          {totalText.replace("{0}", total.toString())}
        </span>
      )
    }

    if (typeof showTotal === "function") {
      totalElement = (
        <div css={totalTextCss}>
          {showTotal(total, [
            curPageVal * itemCountVal + 1,
            (curPageVal + 1) * itemCountVal,
          ])}
        </div>
      )
    }

    const _preIcon: ReactNode = prevIcon ?? <PreIcon />
    const _nextIcon: ReactNode = nextIcon ?? <NextIcon />
    const _moreIcon: ReactNode = moreIcon ?? <MoreIcon />

    return (
      <div
        css={paginationContainer}
        placeholder={placeholder}
        ref={ref}
        {...otherProps}
      >
        {totalElement}
        {simple ? (
          <SimplePagination
            defaultSelectedPageIndex={curPage}
            pageSum={pageSum}
            size={size}
            onCurrentChange={(pageNum) => {
              if (pageNum == 0) return
              setCurPage(pageNum - 1)
            }}
            nextIcon={_nextIcon}
            prevIcon={_preIcon}
            wholeDisabled={disabled == true}
          />
        ) : (
          <span css={paginationContainer}>
            <span
              css={applyDefaultItemWithMarginCss(size, prevDisable)}
              onClick={() => {
                if (prevDisable) return
                setCurPage(curPage - 1)
              }}
            >
              {_preIcon}
            </span>
            {pageSum > 0 && (
              <PageNumGroup
                total={pageSum}
                moreIcon={_moreIcon}
                selectedIndex={curPage}
                wholeDisable={disabled}
                size={size}
                onCurPageIndexChanged={(index) => {
                  setCurPage(index)
                }}
              />
            )}
            <span
              css={applyDefaultItemCss(size, nextDisable)}
              onClick={() => {
                if (nextDisable) return
                setCurPage(curPage + 1)
              }}
            >
              {_nextIcon}
            </span>
          </span>
        )}

        {!simple && showJumper && (
          <JumperInput
            wholeDisable={disabled}
            size={size}
            onEnterPress={(pageNum) => {
              if (pageNum > pageSum - 1) {
                setCurPage(pageSum - 1)
              } else {
                setCurPage(pageNum - 1)
              }
            }}
          />
        )}
        {!simple && sizeCanChange && (
          <PageSizeSelector
            sizeOptions={sizeOptions}
            wholeDisable={disabled}
            size={size}
            onPageSizeSelected={(pageSize) => {
              setItemCount(pageSize)
              setCurPage(0)
            }}
          />
        )}
      </div>
    )
  },
)
