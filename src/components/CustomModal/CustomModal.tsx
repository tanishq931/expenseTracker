import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './CustomModal.styles';

interface Props {
  children?: any;
  isVisible: boolean;
}

function CustomModal({children, isVisible}: Props) {
  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>{children}</View>
      </View>
    </Modal>
  );
}

export default CustomModal;
