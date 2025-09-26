import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../theme/color';
import {pushReplacement} from '../utils/Navigator/PushReplacement';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/screenNames';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

function BaseLayout({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  const isAuthenticated = useSelector(
    (state: RootState) => state.userProfile.isAuthenticated,
  );
  const navigate = useNavigation();
  
  useEffect(() => {
    if (!isAuthenticated) {
      pushReplacement(navigate, SCREENS.LOGIN);
    }
  }, [isAuthenticated]);

  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});

export default BaseLayout;
