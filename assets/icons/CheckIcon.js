import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CheckIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7 11.878c.941.685 2.824 2.568 3.595 3.852.941-2.054 3.337-6.676 5.905-8.73"
        stroke={props?.stroke || '#000'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CheckIcon;
