import { forwardRef, useContext } from "react"
import { SubMenuProps } from "../interface"
import {
  applyHorizontalLine,
  applyHorizontalSubMenuContainer,
  horizontalSubMenuIcon,
  horizontalSubMenuLabel,
} from "./style"
import { MenuContext } from "../menu-context"
import { Dropdown } from "@illa-design/dropdown"
import { DownIcon } from "@illa-design/icon"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const HorizontalSubMenu = forwardRef<HTMLDivElement, SubMenuProps>(
  (props, ref) => {
    const {
      children,
      opened,
      selected,
      disabled,
      hidden,
      icon,
      label,
      onVisibleChange,
      ...otherProps
    } = props

    const menuContext = useContext(MenuContext)
    const colorScheme = menuContext?.colorScheme ?? "blue"

    if (hidden) {
      return null
    }

    return (
      <Dropdown
        trigger="hover"
        position="bottom-start"
        popupVisible={opened}
        disabled={disabled}
        onVisibleChange={onVisibleChange}
        dropList={children}
      >
        <div
          css={[
            applyHorizontalSubMenuContainer(colorScheme, selected, disabled),
            applyBoxStyle(otherProps),
          ]}
          ref={ref}
          {...deleteCssProps(otherProps)}
        >
          {icon && <span css={horizontalSubMenuIcon}>{icon}</span>}
          {label && <span css={horizontalSubMenuLabel}>{label}</span>}
          {children && <DownIcon ml="8px" fs="14px" />}
          <div
            css={applyHorizontalLine(colorScheme, selected, disabled)}
            className="horizontalLine"
          />
        </div>
      </Dropdown>
    )
  },
)

HorizontalSubMenu.displayName = "HorizontalSubMenu"
