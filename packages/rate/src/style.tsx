import { globalColor, illaPrefix } from "@illa-design/theme"
import { css, keyframes } from "@emotion/css"

export const rateScale = keyframes`
  0% {
    transform: scale(1);
  }

  57%{
    transform: scale(1.33);
  }
  
  100% {
    transform: scale(1);
  }
`
export function applyRate(disabled: boolean): string {
  const cursor = disabled ? `cursor: not-allowed;` : ""
  return css`
    display: inline-block;
    user-select: none;
    ${cursor}
  `
}

export function applyRateInner(): string {
  return css`
    display: flex;
    align-items: center;
    font-size: 24px;
    line-height: 1;
    min-height: 32px;
  `
}

export function applyRateCharacter(
  disabled: boolean,
  readonly: boolean,
  animate?: boolean,
): string {
  const cursor = disabled || readonly ? `` : `cursor: pointer`
  const animation = animate
    ? css`
        animation: ${rateScale} 0.35s ease-in-out;
      `
    : ""
  return css`
    position: relative;
    transition: transform 0.15s ease-in-out;
    color: ${globalColor(`--${illaPrefix}-gray-08`)};
    ${cursor};
    ${animation};
    &:not(:last-of-type) {
      margin-right: 7px;
    }
    &:hover {
      transform: ${readonly ? "" : `scale(1.33)`};
    }
  `
}

export function applyRateCharacterLeft(
  isHalf?: boolean,
  isStar?: boolean,
): string {
  const color = isStar
    ? `${globalColor(`--${illaPrefix}-yellow-04`)}`
    : `${globalColor(`--${illaPrefix}-red-03`)}`
  return css`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    transition: inherit;
    color: ${isHalf ? `${color}` : ""};
    opacity: ${isHalf ? 1 : 0};
    > svg {
      float: left;
    }
  `
}

export function applyRateCharacterRight(
  isFull?: boolean,
  isStar?: boolean,
): string {
  const color = isStar
    ? `${globalColor(`--${illaPrefix}-yellow-04`)}`
    : `${globalColor(`--${illaPrefix}-red-03`)}`
  return css`
    transition: inherit;
    color: ${isFull ? `${color}` : ""};
    > svg {
      float: left;
    }
  `
}
