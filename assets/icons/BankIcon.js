import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BankIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4 15v-2.669M9.333 15v-2.669M14.667 15v-2.669M20 15v-2.669M2.4 18.4h19.2v3.2H2.4v-3.2zm0-9.6V6.667L11.606 2.4 21.6 6.667V8.8H2.4z"
        stroke={props?.stroke || "#C3C3C3"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BankIcon
