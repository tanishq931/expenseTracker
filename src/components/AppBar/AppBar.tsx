import React from 'react';
import {Text, TextStyle, View} from 'react-native';
import styles from './AppBar.styles';
import {TextStyles} from '../../theme/textstyles';

function AppBar({
  title,
  centerTitle = false,
  titleStyle,
  bottomComponent,
  leading,
  gap = 4,
}: {
  title: string;
  titleStyle?: TextStyle;
  centerTitle?: boolean;
  bottomComponent?: React.JSX.Element;
  leading?: React.JSX.Element;
  gap?: number;
}): React.JSX.Element {
  return (
    <View style={[styles.container, {gap: gap}]}>
      <View style={styles.innerContainer}>
        {leading && <View style={styles.leadingView}>{leading}</View>}
        <Text
          style={[
            styles.titleText,
            TextStyles.boldText,
            {textAlign: centerTitle ? 'center' : 'left'},
          ]}>
          {title}
        </Text>
      </View>
      {bottomComponent}
    </View>
  );
}

export default AppBar;
