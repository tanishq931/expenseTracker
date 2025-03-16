import React from 'react';
import {Text, TextStyle, View} from 'react-native';
import styles from './AppBar.styles';
import BaseLayout from '../../layouts/BaseLayout';
import {TextStyles} from '../../theme/textstyles';

function AppBar({
  title,
  centerTitle = false,
  titleStyle,
  bottomComponent,
  leading,
}: {
  title: string;
  titleStyle?: TextStyle;
  centerTitle?: boolean;
  bottomComponent?: React.JSX.Element;
  leading?: React.JSX.Element;
}): React.JSX.Element {
  return (
    <View style={styles.container}>
      {leading && <View style={styles.leadingView}>{leading}</View>}
      <Text
        style={[
          styles.titleText,
          TextStyles.titleText,
          {textAlign: centerTitle ? 'center' : 'left'},
        ]}>
        {title}
      </Text>
      {bottomComponent}
    </View>
  );
}

export default AppBar;
