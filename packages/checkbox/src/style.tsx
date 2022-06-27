import { globalColor, illaPrefix } from "@illa-design/theme"
import { CheckboxColorScheme, CheckboxProps } from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"

const innerColor = [
  "gray",
  "blue",
  "purple",
  "red",
  "green",
  "yellow",
  "orange",
  "cyan",
  "white",
  "grayBlue",
  "techPink",
  "techPurple",
]

export function applyCheckboxSize(
  checked?: boolean,
  colorScheme?: CheckboxColorScheme,
) {
  const _colorScheme =
    colorScheme && innerColor.indexOf(colorScheme) > -1 ? colorScheme : "blue"
  let checkedCss = css()
  if (checked) {
    checkedCss = css`
      border-color: transparent;
      background-color: ${globalColor(`--${illaPrefix}-${_colorScheme}-01`)};

      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-${_colorScheme}-02`)};
      }

      &:disabled {
        background-color: ${globalColor(`--${illaPrefix}-${_colorScheme}-06`)};
      }
    `
  }
  return css`
    position: relative;
    appearance: none;
    border-radius: 2px;
    margin: auto;
    width: 16px;
    height: 16px;
    border: solid 2px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    cursor: pointer;
    transition: 0.15s all linear;
    &:hover {
      border-color: ${globalColor(`--${illaPrefix}-${_colorScheme}-06`)};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    }
    ${checkedCss}
  `
}

export function applyCheckState(checked: boolean) {
  return css`
    position: absolute;
    left: 0;
    width: 16px;
    height: 8px;
    transform: ${checked ? "scale(1);" : "scale(0);"};
    color: white;
    transition: 0.15s all linear;
    pointer-events: none;
  `
}

export function applyMergeCss(props: CheckboxProps): SerializedStyles {
  const currentDisabled = props.disabled ?? false

  return css`
    position: relative;
    display: inline-flex;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 22px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    cursor: ${currentDisabled ? "not-allowed" : "pointer"};
  `
}

export function applyCheckboxContainerHorizontal(
  spacing: string | number,
): SerializedStyles {
  const currentSpacing = typeof spacing === "string" ? spacing : `${spacing}px`

  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    gap: ${currentSpacing};
    margin-right: ${currentSpacing};
  `
}

export function applyCheckboxContainerVertical(
  spacing: string | number,
): SerializedStyles {
  const currentSpacing = typeof spacing === "string" ? spacing : `${spacing}px`

  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: column;
    align-items: flex-start;
    gap: ${currentSpacing};
    margin-bottom: ${currentSpacing};
  `
}

export const childrenContainerCss = css`
  margin-left: 8px;
`
