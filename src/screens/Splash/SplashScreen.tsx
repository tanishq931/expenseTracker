import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './SplashScreen.styles';
import {getAuth} from '@react-native-firebase/auth';
import {AppDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {pushReplacement} from '../../utils/Navigator/PushReplacement';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/screenNames';
import {toggleUserAuthentication} from '../../redux/UserSlice';

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
  
  return <View style={styles.container}></View>;
}

export default SplashScreen;
