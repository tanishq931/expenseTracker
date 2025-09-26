import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './ImagePicker.styles';
import {TextStyles} from '../../theme/textstyles';
import UploadIcon from '../../../assets/icons/UploadIcon';
import useBottomSheet from '../../utils/BottomSheet/useBottomSheet';
import {BOTTOMSHEET_TYPES} from '../../constants/constants';
import DeleteIcon_2 from '../../../assets/icons/DeleteIcon_2';
import {useDispatch} from 'react-redux';
import {setPickedImageUrl} from '../../redux/TransactionSlice';
import {setImageViewUrl} from '../../redux/UtilsSlice';

function ImagePicker({imgUrl}: {imgUrl: string}) {
  const {openSheet} = useBottomSheet();
  const dispatch = useDispatch();
  const showAlert = () => {
    Alert.alert('Sure, you want to delete this image?', '', [
      {
        text: 'cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: deleteImg,
      },
    ]);
  };

  const deleteImg = () => {
    dispatch(setPickedImageUrl(''));
  };
  const handleImagePress = () => {
    dispatch(setImageViewUrl(imgUrl));
    openSheet(BOTTOMSHEET_TYPES.IMAGE_VIEWER);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.titleText, TextStyles.mediumText]}>
        Bill Image (Optional)
      </Text>
      {!!imgUrl ? (
        <View>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={{uri: imgUrl}} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteIcon} onPress={showAlert}>
            <DeleteIcon_2 height={30} width={30} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.uploadContainer}>
          <TouchableOpacity
            style={styles.uploadTextContainer}
            disabled={false}
            onPress={() => openSheet(BOTTOMSHEET_TYPES.IMAGE_PICKER)}>
            <Text style={[styles.uploadText, TextStyles.mediumText]}>
              Upload
            </Text>
            <UploadIcon height={24} width={24} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default ImagePicker;
