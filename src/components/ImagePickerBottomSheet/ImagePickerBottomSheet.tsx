import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './ImagePickerBottomSheet.styles';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import GalleryIcon from '../../../assets/icons/GalleryIcon';
import CameraIcon from '../../../assets/icons/CameraIcon';
import useBottomSheet from '../../utils/BottomSheet/useBottomSheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {setPickedImageUrl} from '../../redux/TransactionSlice';
import {showSnackbar} from '../../utils/Snackbar/showSnackbar';

function ImagePickerBottomSheet() {
  const {closeSheet} = useBottomSheet();
  const dispatch = useDispatch();

  const options: any = {
    mediaType: 'photo',
    quality: 1,
  };

  const openCamera = () => {
    closeSheet();
    launchCamera(options, handleResponse);
  };

  const openGallery = () => {
    closeSheet();
    launchImageLibrary(options, handleResponse);
  };

  const handleResponse = (response: any) => {
    if (response.didCancel) {
      showSnackbar('Upload Cancelled', '');
    } else if (response.errorCode) {
      showSnackbar('Something went wrong', 'Try Again');
    } else {
      dispatch(setPickedImageUrl(response?.assets[0].uri));
    }
  };

  return (
    <BottomSheetView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => openGallery()}>
          <GalleryIcon height={20} width={20} />
          <Text style={styles.btnText}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => openCamera()}>
          <CameraIcon height={20} width={20} />
          <Text style={styles.btnText}>Camera</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => closeSheet()}>
        <Text style={styles.btnText}>Cancel</Text>
      </TouchableOpacity>
    </BottomSheetView>
  );
}

export default ImagePickerBottomSheet;
