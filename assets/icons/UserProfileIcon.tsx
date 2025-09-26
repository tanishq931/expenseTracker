import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function UserProfileIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.4 20.512c0-3.775 3.154-6.836 9.6-6.836s9.6 3.06 9.6 6.836c0 .601-.438 1.088-.979 1.088H3.38c-.54 0-.98-.487-.98-1.088zM15.6 6a3.6 3.6 0 11-7.2 0 3.6 3.6 0 017.2 0z"
        stroke={props?.stroke || "#000"}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default UserProfileIcon;
