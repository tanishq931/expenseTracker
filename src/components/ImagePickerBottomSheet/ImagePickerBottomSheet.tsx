import React from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import styles from './ImagePickerBottomSheet.styles';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import GalleryIcon from '../../../assets/icons/GalleryIcon';
import CameraIcon from '../../../assets/icons/CameraIcon';
import useBottomSheet from '../../utils/BottomSheet/useBottomSheet';
import {useDispatch} from 'react-redux';
import {setPickedImageUrl} from '../../redux/TransactionSlice';
import {showSnackbar} from '../../utils/Snackbar/showSnackbar';
import ImagePicker from 'react-native-image-crop-picker';
import {PLATFORM_TYPE} from '../../constants/constants';
import {PERMISSIONS, request} from 'react-native-permissions';
import {Colors} from '../../theme/color';

function ImagePickerBottomSheet() {
  const {closeSheet} = useBottomSheet();
  const dispatch = useDispatch();

  const options: any = {
    height: 200,
    width: 300,
    cropping: true,
    useFrontCamera: true,
    enableRotationGesture: true,
    cropperToolbarTitle: 'Crop Image',
    cropperToolbarColor: Colors.BACKGROUND,
    showCropFrame: true,
    cropperToolbarWidgetColor: '#0000ff',
  };

  const requestCameraPermission = async () => {
    let response: string = '';
    if (Platform.OS === PLATFORM_TYPE.ANDROID) {
      response = await request(PERMISSIONS.ANDROID.CAMERA);
    } else {
      response = await request(PERMISSIONS.IOS.CAMERA);
    }
    if (response === 'granted') {
      openCamera();
    }
  };

  const requestGalleryPermission = async () => {
    let response: string = '';
    if (Platform.OS === PLATFORM_TYPE.ANDROID) {
      const sdkInt = parseInt(Platform.constants?.Release ?? '0', 10);
      if (sdkInt >= 13) {
        response = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      } else {
        response = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      }
    } else {
      response = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    }
    if (response === 'granted') {
      openGallery();
    }
  };

  const openCamera = () => {
    closeSheet();
    ImagePicker.openCamera(options)
      .then(image => {
        handleResponse({path: image.path});
      })
      .catch(error => {
        handleResponse({
          error: error.message || 'Something went wrong',
        });
      });
  };

  const openGallery = () => {
    closeSheet();
    ImagePicker.openPicker(options)
      .then(image => {
        handleResponse({path: image.path});
      })
      .catch(error => {
        handleResponse({
          error: error.message || 'Something went wrong',
        });
      });
  };

  const handleResponse = (response: {path?: string; error?: string}) => {
    let {error, path} = response;
    if (!!error) {
      if (error.includes('cancel')) {
        showSnackbar('Upload Cancelled', '');
      } else {
        showSnackbar('Something went wrong', 'Try Again');
      }
    } else {
      dispatch(setPickedImageUrl(path));
    }
  };

  return (
    <BottomSheetView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => requestGalleryPermission()}>
          <GalleryIcon height={20} width={20} />
          <Text style={styles.btnText}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => requestCameraPermission()}>
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
