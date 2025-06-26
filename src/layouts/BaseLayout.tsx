import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../theme/color';
import {pushReplacement} from '../utils/Navigator/PushReplacement';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/screenNames';
import {getAuth} from '@react-native-firebase/auth';

function BaseLayout({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  const auth = getAuth();
  const navigate = useNavigation();
  if (auth?.currentUser === null) {
    pushReplacement(navigate, SCREENS.LOGIN);
  }
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});

export default BaseLayout;
