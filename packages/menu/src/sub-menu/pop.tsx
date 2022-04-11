import { forwardRef, useContext, MouseEvent, useState } from "react"
import { NextIcon, DownIcon } from "@illa-design/icon"
import { Dropdown } from "@illa-design/dropdown"
import { applySubMenuHeaderCss } from "../style"
import { MenuContext } from "../menu-context"
import { Indent } from "../indent"
import { Menu } from "../menu"
import { SubMenuProps } from "../interface"
import {
  applyPopSubMenuCollapseIconCss,
  applyPopSubMenuCss,
  applySubMenuIconCss,
} from "../styles"
import { isChildrenSelected } from "../util"

export const Pop = forwardRef<HTMLDivElement, SubMenuProps>((props, ref) => {
  const {
    level = 1,
    title,
    children,
    _key = "",
    selectable,
    _css,
    ...restProps
  } = props

  const {
    mode,
    variant,
    levelIndent,
    onClickMenuItem,
    onClickSubMenu,
    selectedKeys = [],
    triggerProps,
    collapse,
  } = useContext(MenuContext)

  const [popupVisible, setPopupVisible] = useState(false)

  const isHorizontal = mode === "horizontal"

  const subMenuClickHandler = (event: MouseEvent) => {
    onClickSubMenu && onClickSubMenu(_key, level as number, "pop")
    selectable && onClickMenuItem && onClickMenuItem(_key, event)
  }

  const menuItemClickHandler = (key: string, event: MouseEvent) => {
    onClickMenuItem && onClickMenuItem(key, event)
    setPopupVisible(false)
  }

  const isSelected =
    (selectable && selectedKeys.includes(_key)) ||
    isChildrenSelected(children, selectedKeys)

  const needPopOnBottom = mode === "horizontal"

  function renderIcon() {
    const icon = needPopOnBottom ? <DownIcon /> : <NextIcon />

    return (
      <span
        css={[
          applySubMenuIconCss(false, collapse, isHorizontal),
          applyPopSubMenuCollapseIconCss(collapse),
        ]}
      >
        {icon}
      </span>
    )
  }

  return (
    <Dropdown
      trigger="hover"
      onVisibleChange={(visible: boolean) => setPopupVisible(visible)}
      droplist={
        <Menu
          selectedKeys={selectedKeys}
          onClickMenuItem={menuItemClickHandler}
        >
          {children}
        </Menu>
      }
      triggerProps={{
        colorScheme: "white",
        position: needPopOnBottom ? "bl" : "rt",
        showArrow: variant !== "pop",
        popupVisible,
        ...triggerProps,
      }}
    >
      <div
        ref={ref}
        onClick={subMenuClickHandler}
        css={[
          applySubMenuHeaderCss(isSelected),
          applyPopSubMenuCss(isHorizontal),
          _css,
        ]}
        {...restProps}
      >
        <Indent level={level} levelIndent={levelIndent} />
        <span>{title}</span>
        {renderIcon()}
      </div>
    </Dropdown>
  )
})
