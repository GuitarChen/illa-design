import { globalColor, illaPrefix } from "@illa-design/theme"
import { RadioColorScheme, RadioSize, RadioStatus } from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"

// default radio
export function applyRadioSize(colorScheme: RadioColorScheme) {
  return css`
    position: relative;
    appearance: none;
    border-radius: 50%;
    margin: auto 6px auto auto;
    width: 16px;
    height: 16px;
    border: solid 2px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    cursor: pointer;
    transition: 0.15s all linear;

    &:hover {
      border-color: ${globalColor(`--${illaPrefix}-${colorScheme}-06`)};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    }

    &:checked {
      border: 4px solid ${globalColor(`--${illaPrefix}-${colorScheme}-01`)};

      &:hover {
        border-color: ${globalColor(`--${illaPrefix}-${colorScheme}-02`)};
      }

      &:disabled {
        border-color: ${globalColor(`--${illaPrefix}-${colorScheme}-05`)};
      }
    }
  `
}

export function applyMergeCss(stateValue?: RadioStatus): SerializedStyles {
  const currentDisabled = stateValue?.disabled ?? false

  return css`
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

export function applyRadioContainerHorizontal(
  spacing: string | number,
): SerializedStyles {
  const currentSpacing = typeof spacing === "string" ? spacing : `${spacing}px`

  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    gap: ${currentSpacing};
  `
}

export function applyRadioContainerVertical(
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

// RadioButton
export const disappear = css`
  position: absolute;
  appearance: none;
  opacity: 0;
  width: 0;
  height: 0;
  top: 0;
  left: 0;

  &:target {
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  }
`

export function applyRadioButtonContainer(size?: RadioSize): SerializedStyles {
  return css`
    width: 100%;
    border-radius: 4px;
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    gap: 1px;
    font-size: 14px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    padding: 1px;
  `
}

export function applyRadioButton(stateValue: RadioStatus) {
  const { colorScheme } = stateValue
  let sizeCss,
    stateCss = css``
  switch (stateValue?.size) {
    case "small":
      sizeCss = css`
        padding: 1px 8px;
        height: 24px;
      `
      break
    case "medium":
      sizeCss = css`
        padding: 5px 12px;
        height: 32px;
      `
      break
    case "large":
      sizeCss = css`
        padding: 9px 16px;
        height: 40px;
      `
      break
  }
  const checkedColor =
    colorScheme === "gray" || colorScheme === "grayBlue"
      ? globalColor(`--${illaPrefix}-${colorScheme}-02`)
      : globalColor(`--${illaPrefix}-${colorScheme}-03`)

  if (stateValue?.disabled && stateValue?.checked) {
    stateCss = css`
      color: ${globalColor(`--${illaPrefix}-${colorScheme}-06`)};
      cursor: not-allowed;
    `
  } else if (stateValue?.disabled) {
    stateCss = css`
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
      cursor: not-allowed;
    `
  } else if (stateValue?.checked) {
    stateCss = css`
      font-weight: 500;
      border-radius: 3px;
      color: ${checkedColor};
      background-color: ${globalColor(`--${illaPrefix}-white-01`)};

      &::before,
      & + label::before {
        opacity: 0;
      }
    `
  } else {
    stateCss = css`
      &:hover {
        border-radius: 3px;
        background-color: ${globalColor(`--${illaPrefix}-white-01`)};
      }
    `
  }
  return css`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.15s all linear;
    white-space: nowrap;
    min-width: 0;
    overflow: hidden;

    &:hover::before,
    &:hover + &::before {
      opacity: 0;
    }

    &:not(:first-of-type):before {
      position: absolute;
      top: 50%;
      left: -2px;
      transform: translateY(-50%);
      display: block;
      height: 12px;
      width: 1px;
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      content: "";
      transition: all 0.1s linear;
    }

    ${sizeCss}
    ${stateCss}
  `
}

export const radioTextCss = css`
  overflow: hidden;
  text-overflow: ellipsis;
`
