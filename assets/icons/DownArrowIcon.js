import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownArrowIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.833 8.334l4.168 3.816 4.166-3.816"
        stroke="#fff"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DownArrowIcon
