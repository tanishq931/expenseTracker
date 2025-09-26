import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AddIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 5v14m-7-7h14"
        stroke={props.stroke || '#fff'}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AddIcon;
