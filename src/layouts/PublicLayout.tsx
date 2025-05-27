import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../theme/color';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/screenNames';
import {pushReplacement} from '../utils/Navigator/PushReplacement';

function PublicLayout({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  const authToken: string | undefined | null = useSelector(
    (state: RootState) => {
      return state?.userProfile?.authToken;
    },
  );
  const navigate = useNavigation();
  if (!!authToken) {
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
