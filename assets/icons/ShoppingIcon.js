import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Rect
} from "react-native-svg"

function ShoppingIcon(props) {
  return (
    <Svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id="linear-gradient"
          x1={23.85}
          x2={23.85}
          y1={22.1}
          y2={40.01}
        >
          <Stop offset={0.18} stopColor="#ffc308" />
          <Stop offset={1} stopColor="#de9908" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id="linear-gradient-2"
          x1={23.85}
          x2={23.85}
          y1={15.29}
          y2={22.38}
        >
          <Stop offset={0.18} stopColor="#e5ad00" />
          <Stop offset={1} stopColor="#c68600" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-3"
          x1={23.77}
          x2={23.98}
          xlinkHref="#linear-gradient"
          y1={15.77}
          y2={23.75}
        />
        <LinearGradient
          id="linear-gradient-4"
          x1={15.35}
          x2={15.35}
          xlinkHref="#linear-gradient"
          y1={37.24}
          y2={32.81}
        />
        <LinearGradient
          id="linear-gradient-5"
          x1={21.35}
          x2={21.35}
          xlinkHref="#linear-gradient"
          y1={37.24}
          y2={32.81}
        />
        <LinearGradient
          id="linear-gradient-6"
          x1={27.35}
          x2={27.35}
          xlinkHref="#linear-gradient"
          y1={37.24}
          y2={32.81}
        />
        <LinearGradient
          id="linear-gradient-7"
          x1={33.35}
          x2={33.35}
          xlinkHref="#linear-gradient"
          y1={37.24}
          y2={32.81}
        />
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id="linear-gradient-8"
          x1={15.35}
          x2={15.35}
          y1={27.48}
          y2={36.15}
        >
          <Stop offset={0.18} stopColor="#8f6500" />
          <Stop offset={1} stopColor="#774800" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-9"
          x1={21.35}
          x2={21.35}
          xlinkHref="#linear-gradient-8"
          y1={27.48}
          y2={36.15}
        />
        <LinearGradient
          id="linear-gradient-10"
          x1={27.35}
          x2={27.35}
          xlinkHref="#linear-gradient-8"
          y1={27.48}
          y2={36.15}
        />
        <LinearGradient
          id="linear-gradient-11"
          x1={33.35}
          x2={33.35}
          xlinkHref="#linear-gradient-8"
          y1={27.48}
          y2={36.15}
        />
        <LinearGradient
          gradientTransform="rotate(-45 15.855 14.473)"
          gradientUnits="userSpaceOnUse"
          id="linear-gradient-12"
          x1={14.74}
          x2={16.87}
          y1={13.36}
          y2={15.49}
        >
          <Stop offset={0} stopColor="#4d4d4d" />
          <Stop offset={0.18} stopColor="gray" />
          <Stop offset={1} stopColor="#4d4d4d" />
        </LinearGradient>
        <LinearGradient
          gradientTransform="rotate(-135 31.852 14.473)"
          id="linear-gradient-13"
          x1={32.92}
          x2={30.83}
          xlinkHref="#linear-gradient-12"
          y1={13.41}
          y2={15.5}
        />
      </Defs>
      <G id="icons">
        <G data-name="Layer 3" id="Layer_3">
          <Path
            d="M7.85 21.47h32v13a5 5 0 01-5 5h-22a5 5 0 01-5-5v-13z"
            fill="url(#linear-gradient)"
          />
          <Path
            d="M7.85 21.47H39.85V23.47H7.85z"
            fill="url(#linear-gradient-2)"
          />
          <Rect
            height={5}
            rx={2.5}
            ry={2.5}
            width={36}
            x={5.85}
            y={16.47}
            fill="url(#linear-gradient-3)"
          />
          <Rect
            height={9}
            rx={1.5}
            ry={1.5}
            width={3}
            x={13.85}
            y={27.47}
            fill="url(#linear-gradient-4)"
          />
          <Rect
            height={9}
            rx={1.5}
            ry={1.5}
            width={3}
            x={19.85}
            y={27.47}
            fill="url(#linear-gradient-5)"
          />
          <Rect
            height={9}
            rx={1.5}
            ry={1.5}
            width={3}
            x={25.85}
            y={27.47}
            fill="url(#linear-gradient-6)"
          />
          <Rect
            height={9}
            rx={1.5}
            ry={1.5}
            width={3}
            x={31.85}
            y={27.47}
            fill="url(#linear-gradient-7)"
          />
          <Rect
            height={9}
            rx={1.5}
            ry={1.5}
            width={3}
            x={13.85}
            y={26.47}
            fill="url(#linear-gradient-8)"
          />
          <Rect
            height={9}
            rx={1.5}
            ry={1.5}
            width={3}
            x={19.85}
            y={26.47}
            fill="url(#linear-gradient-9)"
          />
          <Rect
            height={9}
            rx={1.5}
            ry={1.5}
            width={3}
            x={25.85}
            y={26.47}
            fill="url(#linear-gradient-10)"
          />
          <Rect
            height={9}
            rx={1.5}
            ry={1.5}
            width={3}
            x={31.85}
            y={26.47}
            fill="url(#linear-gradient-11)"
          />
          <Rect
            height={15.59}
            rx={1.5}
            ry={1.5}
            transform="rotate(45 15.854 14.477)"
            width={3}
            x={14.35}
            y={6.68}
            fill="url(#linear-gradient-12)"
          />
          <Rect
            height={15.59}
            rx={1.5}
            ry={1.5}
            transform="rotate(135 31.851 14.476)"
            width={3}
            x={30.35}
            y={6.68}
            fill="url(#linear-gradient-13)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default ShoppingIcon
