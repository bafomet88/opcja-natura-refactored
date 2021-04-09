import * as React from "react"

function IconUser(props) {
  return (
    <svg
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 620 578"
      {...props}
    >
      <path
        fillRule="nonzero"
        d="M310 0C139 0 0 139 0 310c0 100 49 195 132 253 4 3 9 6 13 9l10 6v-12-14c6-98 74-174 155-174s148 76 154 174c1 5 1 10 1 14v12l10-6c4-3 8-6 13-9 82-58 132-153 132-253C620 139 481 0 310 0zm-1 360c-59 0-107-47-107-106s48-107 107-107 106 48 106 107-47 106-106 106zm171 193c-1 1-2 1-3 2v-4c-5-91-62-165-135-183 50-14 86-60 86-114 0-66-53-120-119-120s-120 54-120 120c0 55 37 101 88 115-73 17-129 91-135 182v4c-1-1-2-1-3-2C60 497 13 406 13 310 13 146 146 13 310 13s297 133 297 297c0 96-47 187-127 243z"
      />
    </svg>
  )
}

const MemoIconUser = React.memo(IconUser)
export default MemoIconUser
