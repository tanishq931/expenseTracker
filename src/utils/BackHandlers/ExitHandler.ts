import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useRef} from 'react';
import {BackHandler, Platform, ToastAndroid} from 'react-native';

export const handleExit = (): void => {
  const backPressedOnce = useRef(false);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (backPressedOnce.current) {
          BackHandler.exitApp(); // Exit the app
          return true;
        }

        backPressedOnce.current = true;
        if (Platform.OS === 'android') {
          ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
        }

        setTimeout(() => {
          backPressedOnce.current = false;
        }, 2000); // 2 seconds to tap again

        return true;
      };

      const listener = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => listener.remove();
    }, []),
  );
};
