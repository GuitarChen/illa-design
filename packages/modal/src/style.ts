import { ModalAlignType } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { getColor, globalColor, illaPrefix, zIndex } from "@illa-design/theme"
import { Variants } from "framer-motion"

export const applyModalMask = css`
  z-index: ${zIndex.modal};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${globalColor(`--${illaPrefix}-blackAlpha-02`)};
`

export const applyModalContainer = css`
  position: fixed;
  cursor: auto;
  overflow: auto;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${zIndex.modal};
  &:after {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 100%;
    content: "";
  }
`

export function applyModal(): SerializedStyles {
  return css`
    box-sizing: content-box;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    text-align: left;
    min-width: 520px;
    width: 520px;
    margin: 24px auto;
    border-radius: 8px;
    border: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
  `
}

export function applyModalHeader(
  closable?: boolean,
  withoutLine?: boolean,
): SerializedStyles {
  let border = css``
  if (!withoutLine) {
    border = css`
      border-bottom: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    `
  }

  const paddingCss = closable
    ? css`
        padding: 16px 40px;
      `
    : css`
        padding: 16px;
      `

  return css`
    ${paddingCss};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    ${border};
  `
}

export function applyModalTitle(): SerializedStyles {
  return css`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  `
}

export function applyModalContent(withoutPadding?: boolean): SerializedStyles {
  const paddingCSS = withoutPadding
    ? css`
        padding: 0;
      `
    : ""
  return css`
    font-size: 14px;
    color: ${getColor("grayBlue", "02")};
    font-weight: 400;
    line-height: 22px;
    padding: 8px 24px;
    ${paddingCSS}
  `
}

export const modalCloseIconStyle = css`
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  top: 16px;
  right: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
`

export function applyModalFooter(
  footerAlign?: ModalAlignType,
  withoutLine?: boolean,
): SerializedStyles {
  const textAlignCss = footerAlign
    ? css`
        text-align: ${footerAlign};
      `
    : ""
  const line = withoutLine
    ? css``
    : css`
        border-top: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      `
  return css`
    text-align: right;
    width: 100%;
    box-sizing: border-box;
    padding: 16px 24px;
    ${line};
    ${textAlignCss};
  `
}

export const applyModalCancelBtn = css`
  margin-right: 8px;
`

export const maskAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export const modalAnimation: Variants = {
  initial: {
    opacity: 0,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
  },
  exit: {
    opacity: 0,
    scaleX: 0.5,
    scaleY: 0.5,
  },
}
