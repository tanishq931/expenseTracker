import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function PaymentIcon_1(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      {...props}
    >
      <G fill="#506C7F">
        <Path d="M18 25H22V54H18z" />
        <Path d="M30 25H34V54H30z" />
        <Path d="M42 25H46V54H42z" />
      </G>
      <G fill="#B4CCB9">
        <Path d="M48 25H52V54H48z" />
        <Path d="M24 25H28V54H24z" />
        <Path d="M36 25H40V54H36z" />
        <Path d="M12 25H16V54H12z" />
      </G>
      <G fill="#F9EBB2">
        <Path d="M8 56a2 2 0 00-2 2h52a2 2 0 00-2-2H8zM60 60H4a2 2 0 00-2 2h60a2 2 0 00-2-2z" />
      </G>
      <Path
        fill="#F9EBB2"
        d="M4 23h56c.893 0 1.684-.601 1.926-1.461a2.007 2.007 0 00-.889-2.248l-28-17a1.988 1.988 0 00-2.074-.001L2.961 19.291a2.004 2.004 0 00-.888 2.247A2.01 2.01 0 004 23z"
      />
      <G fill="#394240">
        <Path d="M60 58a4 4 0 00-4-4h-2V25h6a4 4 0 002.077-7.419l-28-17a3.994 3.994 0 00-4.153 0l-28 17A3.999 3.999 0 004 25h6v29H8a4 4 0 00-4 4 4 4 0 00-4 4v2h64v-2a4 4 0 00-4-4zM4 23a2.007 2.007 0 01-1.926-1.462 2.004 2.004 0 01.888-2.247l28-17.001a2.002 2.002 0 012.077.001l28 17a2.003 2.003 0 01.887 2.248A2.006 2.006 0 0160 23H4zm48 2v29h-4V25h4zm-6 0v29h-4V25h4zm-6 0v29h-4V25h4zm-6 0v29h-4V25h4zm-6 0v29h-4V25h4zm-6 0v29h-4V25h4zm-6 0v29h-4V25h4zM8 56h48a2 2 0 012 2H6a2 2 0 012-2zm-6 6a2 2 0 012-2h56a2 2 0 012 2H2z" />
        <Path d="M32 9c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 8a3 3 0 110-6 3 3 0 010 6z" />
      </G>
      <Circle fill="#F76D57" cx={32} cy={14} r={3} />
    </Svg>
  )
}

export default PaymentIcon_1
