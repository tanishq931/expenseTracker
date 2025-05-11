import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './LoginFooter.styles';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/screenNames';
import GoogleSignInBtn from '../GoogleSignInBtn/GoogleSignInBtn';

function LoginFooter({isFromLogin = true}: {isFromLogin?: boolean}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.registerContainer}>
        <Text style={styles.dontText}>
          {isFromLogin ? "Don't have any account?" : 'Already have an account?'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(isFromLogin ? SCREENS.SIGNUP : SCREENS.LOGIN);
          }}>
          <Text style={styles.registerText}>
            {isFromLogin ? 'Register' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or</Text>
        <View style={styles.divider} />
      </View>
      <GoogleSignInBtn />
    </View>
  );
}

export default LoginFooter;
