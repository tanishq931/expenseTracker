import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../theme/color';

function BaseLayout({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.NAVY_BLUE,
  },
});

export default BaseLayout;
