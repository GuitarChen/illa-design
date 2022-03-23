import { FC } from "react"
import { AvatarProps, AvatarSize } from "./interface"
import { applyIconSize, applyMergeCss } from "./style"
import { css } from "@emotion/css"
import { PersonIcon } from "@illa-design/icon"

export const IconAvatar: FC<AvatarProps> = (props) => {
  const currentColorScheme = props.colorScheme ?? "blue"
  const currentSize = props.size ?? "small"
  const currentShape = props.shape ?? "circle"

  let iconSize: string
  switch (currentSize) {
    default:
    case "large": {
      iconSize = "28px"
      break
    }
    case "medium": {
      iconSize = "18px"
      break
    }
    case "small": {
      iconSize = "14px"
      break
    }
  }

  const currentIcon = props.icon ?? <PersonIcon size={iconSize} />
  const finalProps = {
    ...props,
    colorScheme: currentColorScheme,
    size: currentSize,
    shape: currentShape,
    icon: currentIcon,
  } as AvatarProps
  return (
    <div className={applyMergeCss(finalProps)}>
      <div className={applyIconSize(finalProps.size!!)}>{finalProps.icon}</div>
    </div>
  )
}
