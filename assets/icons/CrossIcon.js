import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CrossIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20 4L4 20m16 0L4 4"
        stroke={props?.stroke || '#fff'}
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default CrossIcon;
