import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import styles from './SplashScreen.styles';
import {getAuth} from '@react-native-firebase/auth';
import {AppDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {pushReplacement} from '../../utils/Navigator/PushReplacement';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/screenNames';
import {toggleUserAuthentication} from '../../redux/UserSlice';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function SplashScreen() {
  const auth = getAuth();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigation();

  useEffect(() => {
    const isAuthenticated = !!auth.currentUser;
    setTimeout(() => {
      if (!isAuthenticated) {
        pushReplacement(navigate, SCREENS.LOGIN);
      } else {
        pushReplacement(navigate, SCREENS.HOME);
      }
    }, 500);

    dispatch(toggleUserAuthentication(isAuthenticated));
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/SplashScreen.png')}
        style={{height: 100, width: 100, marginBottom: insets.bottom}}
      />
    </View>
  );
}

export default SplashScreen;
