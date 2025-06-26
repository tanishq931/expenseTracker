import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../theme/color';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/screenNames';
import {pushReplacement} from '../utils/Navigator/PushReplacement';
import {getAuth} from '@react-native-firebase/auth';

function PublicLayout({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  const auth = getAuth();
  const navigate = useNavigation();
  if (!!auth.currentUser) {
    pushReplacement(navigate, SCREENS.HOME);
  }
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});

export default PublicLayout;
