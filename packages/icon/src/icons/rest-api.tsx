import { createIcon } from "../create-icon"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const RestApiIcon = createIcon({
  title: "RestApiIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        d="M6.088 14v-1.5H4.456c-.906 0-1.087.046-1.087-1.065V9.623c0-.912-.632-1.507-1.813-1.56v-.12c1.181-.052 1.813-.654 1.813-1.56V4.565c0-1.11.181-1.065 1.087-1.065h1.631V2H4.145c-1.694 0-2.238.569-2.238 2.327v1.468c0 1.038-.493 1.52-1.906 1.422V8.79c1.413-.1 1.906.384 1.906 1.415v1.468C1.906 13.43 2.45 14 4.144 14h1.944zM11.856 14c1.694 0 2.238-.569 2.238-2.327v-1.468c0-1.031.494-1.514 1.906-1.415V7.217c-1.412.099-1.906-.384-1.906-1.422V4.327C14.094 2.57 13.55 2 11.856 2H10v1.5h.631c.906 0 2-.045 2 1.065v1.818c0 .906.631 1.508 1.813 1.56v.12c-1.182.053-1.813.648-1.813 1.56v1.812c0 1.11-1.094 1.065-2 1.065H10V14h1.856z"
        fill={globalColor(`--${illaPrefix}-grayBlue-07`)}
      />
      <path
        d="M5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        fill={globalColor(`--${illaPrefix}-grayBlue-08`)}
      />
    </>
  ),
})

RestApiIcon.displayName = "RestApiIcon"
