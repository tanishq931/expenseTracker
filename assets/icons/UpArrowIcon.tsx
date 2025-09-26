import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function UpArrowIcon(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7 14.583L12 10l5 4.583"
        stroke={props.stroke || '#fff'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default UpArrowIcon;
