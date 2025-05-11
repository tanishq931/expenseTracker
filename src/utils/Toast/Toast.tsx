import Toast from 'react-native-toast-message';

export const showToast = (type: string) => {
  Toast.show({
    type: type,
    text1: 'Just Checking',
  });

  //   ToastAndroid.showWithGravityAndOffset('Just Checking', 2000, 5000, 20, 20);
};
