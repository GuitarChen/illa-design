import { forwardRef } from "react"
import { ProgressProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import {
  applyContainer,
  applyProgressContainer,
  applyProgressContainerBg,
  applySvgContainer,
} from "./common-style"

export const MiniRingProgress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      type = "line",
      steps,
      status = "normal",
      color = "blue",
      width = "16px",
      strokeWidth = "4px",
      trailColor = "gray",
      showText = true,
      formatText = (percent: number) => {
        return `${percent}%`
      },
      percent = 0,
      ...otherProps
    } = props

    const radius = `calc((${width} - ${strokeWidth}) / 2)`
    const center = `calc(${width} / 2)`

    let finalColor: string

    switch (status) {
      case "normal":
        finalColor = color
        break
      case "success":
        finalColor = "green"
        break
      case "error":
        finalColor = "red"
        break
    }

    return (
      <div css={applyContainer(width)} ref={ref} {...otherProps}>
        <Trigger disabled={!showText} content={formatText(percent)}>
          <svg css={applySvgContainer(width)}>
            <circle
              css={applyProgressContainerBg(trailColor, width, strokeWidth)}
              fill="none"
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <circle
              css={applyProgressContainer(
                finalColor,
                width,
                strokeWidth,
                percent,
              )}
              fill="none"
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
            />
          </svg>
        </Trigger>
      </div>
    )
  },
)

MiniRingProgress.displayName = "MiniRingProgress"
