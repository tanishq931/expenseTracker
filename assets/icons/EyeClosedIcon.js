import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EyeClosedIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.4 19.5l-15-15m4.8 5.942a2.29 2.29 0 00-.6 1.544c0 1.29 1.074 2.336 2.4 2.336a2.43 2.43 0 001.593-.589m6.846.589c.826-1.237 1.16-2.246 1.16-2.246S19.416 5.1 12 5.1c-.415 0-.815.022-1.2.063m6.6 12.186c-1.377.88-3.15 1.5-5.4 1.464-7.322-.12-9.6-6.737-9.6-6.737s1.059-3.378 4.2-5.433"
        stroke={props?.stroke || '#fff'}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default EyeClosedIcon;
