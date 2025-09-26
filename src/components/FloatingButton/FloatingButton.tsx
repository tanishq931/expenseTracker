import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './FloatingButton.styles';
import AddIcon from '../../../assets/icons/AddIcon';

function FloatingButton({
  onPress,
  Icon = AddIcon,
  iconProps,
}: {
  onPress: () => void;
  Icon?: any;
  iconProps?: any;
}) {
  return (
    <TouchableOpacity style={styles.floatingBtn} onPress={onPress}>
      <Icon {...iconProps} />
    </TouchableOpacity>
  );
}

export default FloatingButton;
