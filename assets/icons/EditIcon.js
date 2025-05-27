import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EditIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.449 6.952l3.6 3.6m-12.6 9l4.366-.88a1.2 1.2 0 00.611-.328l9.774-9.78a1.2 1.2 0 000-1.697L17.128 4.8a1.2 1.2 0 00-1.697.001l-9.775 9.78a1.2 1.2 0 00-.327.61l-.881 4.362z"
        stroke={props?.stroke || '#C3C3C3'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EditIcon;
