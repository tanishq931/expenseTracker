import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import GoogleIcon from '../../../assets/icons/GoogleIcon';
import {TextStyles} from '../../theme/textstyles';
import styles from './GoogleSignInBtn.styles';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {setAuthToken} from '../../redux/AuthSlice';

function GoogleSignInBtn() {
  const dispatch = useDispatch();
  GoogleSignin.configure({
    webClientId:
      '430418871088-f5mevtpkav01igrv0raf4p775b3fj4ub.apps.googleusercontent.com',
    offlineAccess: false,
  });

  const getGoogleAuth = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      const idToken = response.data?.idToken;
      if (idToken) {
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        const userCredential = await auth().signInWithCredential(
          googleCredential,
        );
        const token = await userCredential.user.getIdToken();
        dispatch(setAuthToken(token));
      }
    } catch (error) {}
  };

  return (
    <TouchableOpacity style={styles.googleBtn} onPress={getGoogleAuth}>
      <GoogleIcon />
      <Text style={[styles.googleSignInText, TextStyles.boldText]}>
        Sign-in with Google
      </Text>
    </TouchableOpacity>
  );
}

export default GoogleSignInBtn;
