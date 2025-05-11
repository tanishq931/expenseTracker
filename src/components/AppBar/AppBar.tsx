import React from 'react';
import {Text, TextStyle, TouchableOpacity, View} from 'react-native';
import styles from './AppBar.styles';
import {TextStyles} from '../../theme/textstyles';
import BackArrowIcon from '../../../assets/icons/BackArrow';
import {Colors} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';

function AppBar({
  title,
  centerTitle = false,
  titleStyle,
  bottomComponent,
  leading,
  gap = 4,
  isBackBtnEnabled = true,
}: {
  title: string;
  titleStyle?: TextStyle;
  centerTitle?: boolean;
  bottomComponent?: React.JSX.Element;
  leading?: React.JSX.Element;
  gap?: number;
  isBackBtnEnabled?: boolean;
}): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {gap: gap}]}>
      <View style={styles.innerContainer}>
        {isBackBtnEnabled && (
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}>
            <BackArrowIcon stroke={Colors.WHITE} height={38} width={38} />
          </TouchableOpacity>
        )}
        {!!leading && <View style={styles.leadingView}>{leading}</View>}
        <Text
          style={[
            styles.titleText,
            TextStyles.boldText,
            titleStyle,
            {
              textAlign: centerTitle ? 'center' : 'left',
              marginLeft: leading ? 30 : isBackBtnEnabled ? 20 : 0,
            },
          ]}>
          {title}
        </Text>
      </View>
      {bottomComponent}
    </View>
  );
}

export default AppBar;
