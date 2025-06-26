import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import GoogleIcon from '../../../assets/icons/GoogleIcon';
import {TextStyles} from '../../theme/textstyles';
import styles from './GoogleSignInBtn.styles';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {showSnackbar} from '../../utils/Snackbar/showSnackbar';

function GoogleSignInBtn() {
  GoogleSignin.configure({
    webClientId: Config.WEB_CLIENT_ID,
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
        showSnackbar('Signed in successfully', '');
      }
    } catch (error) {
      showSnackbar('Something went wrong', 'Try Again');
    }
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
