import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function UpArrowIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.78 3.6H5.074c-.561 0-1.1.221-1.497.615s-.62.928-.62 1.485v12.6c0 .557.223 1.091.62 1.485.397.394.936.615 1.497.615H8.78m.263-8.4h12m0 0l-4.585-4.8m4.585 4.8l-4.585 4.8"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default UpArrowIcon;
