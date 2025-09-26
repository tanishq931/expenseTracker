import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ChartIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.435 21.883a9.035 9.035 0 009.036-9.036h-9.036V3.812a9.035 9.035 0 000 18.07z"
        stroke={props?.stroke || '#C3C3C3'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.388 2.118v6.69H21.6v-.479a6.212 6.212 0 00-6.212-6.211z"
        stroke={props?.stroke || '#C3C3C3'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChartIcon;
