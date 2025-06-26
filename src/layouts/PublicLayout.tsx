import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../theme/color';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/screenNames';
import {pushReplacement} from '../utils/Navigator/PushReplacement';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

function PublicLayout({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  const navigate = useNavigation();
  const isAuthenticated = useSelector(
    (state: RootState) => state.userProfile.isAuthenticated,
  );
  if (isAuthenticated) {
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
