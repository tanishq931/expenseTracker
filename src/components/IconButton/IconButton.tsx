import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {TextStyles} from '../../theme/textstyles';
import styles from './IconButton.styles';

function IconButton({
  btnText,
  onPress,
  Icon,
  color = 'white',
}: {
  onPress: () => void;
  btnText: string;
  Icon: Element;
  color?: string;
}): React.JSX.Element {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {borderColor: color}]}>
      <Icon stroke={color} />
      <Text style={[styles.btnTitle, TextStyles.mediumText, {color: color}]}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
}

export default IconButton;
