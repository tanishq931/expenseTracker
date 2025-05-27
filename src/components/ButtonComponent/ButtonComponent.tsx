import React from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import styles from './ButtonComponent.styles';
import {TextStyles} from '../../theme/textstyles';

function ButtonComponent({
  btnStyles,
  disabled,
  onPress,
  title,
  titleStyle,
}: {
  btnStyles?: ViewStyle;
  disabled?: boolean;
  onPress: () => void;
  title: string;
  titleStyle?: TextStyle;
}) {
  return (
    <TouchableOpacity
      style={[styles.container, btnStyles, {opacity: disabled ? 0.5 : 1}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.btnTitle, TextStyles.mediumText, titleStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent;
