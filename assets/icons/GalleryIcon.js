import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GalleryIcon(props) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 12.5l1.752-1.533a2.3 2.3 0 013.14.105l4.29 4.29a2 2 0 002.564.222l.299-.21a3 3 0 013.731.225L21 18.5"
        stroke="#ffffff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M17 2v9m0-9l3 3m-3-3l-3 3"
        stroke="#ffffff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536"
        stroke="#ffffff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default GalleryIcon
