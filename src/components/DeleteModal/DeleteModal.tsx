import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './DeleteModal.styles';
import CrossIcon from '../../../assets/icons/CrossIcon';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import CustomModal from '../CustomModal/CustomModal';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  onPressDelete: () => void;
  title: string;
  subTitle?: string;
}

function DeleteModal({
  isVisible,
  onClose,
  onPressDelete,
  title,
  subTitle,
}: Props) {
  return (
    <CustomModal isVisible={isVisible}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onClose} style={styles.crossBtn}>
          <CrossIcon />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subTitleText}>{subTitle}</Text>
        </View>
        <View style={styles.btnBar}>
          <ButtonComponent
            btnStyles={styles.btnStyle}
            title="Cancel"
            onPress={onClose}
          />
          <ButtonComponent
            btnStyles={styles.btnStyle}
            title="Yes, Sure"
            onPress={onPressDelete}
          />
        </View>
      </View>
    </CustomModal>
  );
}

export default DeleteModal;
