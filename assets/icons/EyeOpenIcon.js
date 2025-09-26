import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function EyeOpenIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 12s4-8 11-8 11 8 11 8M1 12s4 8 11 8 11-8 11-8"
        stroke={props?.stroke || '#fff'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={12}
        cy={12}
        r={3}
        stroke={props?.stroke || '#fff'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EyeOpenIcon;
