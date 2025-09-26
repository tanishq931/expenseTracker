import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CalendarIcon(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5 8.914h14M6.81 3v1.543M17 3v1.543m0 0H7c-1.657 0-3 1.381-3 3.086v10.285C4 19.618 5.343 21 7 21h10c1.657 0 3-1.381 3-3.086V7.63c0-1.705-1.343-3.086-3-3.086zm3 10.543h-5.5m0 0h-5m5 0v5.143m0-5.143V9.429m-5 5.657H4m5.5 0v5.143m0-5.143V9.429"
        stroke={props?.stroke || '#fff'}
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CalendarIcon;
