import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AccountIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.4 12.26h9.34m.52 9.34V2.4M7.33 9.146V5.773M5.643 7.459h3.373m-3.373 9.99h3.373m6.357-3.373h3.373m-3.373-3.114h3.373M4.995 21.6h14.01a2.595 2.595 0 002.595-2.595V4.995A2.595 2.595 0 0019.005 2.4H4.995A2.595 2.595 0 002.4 4.995v14.01A2.595 2.595 0 004.995 21.6z"
        stroke={props.stroke || '#C3C3C3'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AccountIcon;
