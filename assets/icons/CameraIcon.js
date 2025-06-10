import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function CameraIcon(props) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={13} r={3} stroke="#ffffff" strokeWidth={1.5} />
      <Path
        d="M10 20h4c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 001.104-1.104C21 17.213 21 15.81 21 13c0-2.809 0-4.213-.674-5.222a4 4 0 00-1.104-1.104C18.213 6 16.81 6 14 6h-4c-2.809 0-4.213 0-5.222.674a4 4 0 00-1.104 1.104C3 8.787 3 10.19 3 12.998V13c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104C5.787 20 7.19 20 10 20z"
        stroke="#ffffff"
        strokeWidth={1.5}
      />
      <Path
        d="M18 10h-.5M14.5 3.5h-5"
        stroke="#ffffff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default CameraIcon
