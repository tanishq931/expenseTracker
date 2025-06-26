import React from 'react';
import {Text, TextStyle, TouchableOpacity, View} from 'react-native';
import styles from './AppBar.styles';
import {TextStyles} from '../../theme/textstyles';
import BackArrowIcon from '../../../assets/icons/BackArrow';
import {Colors} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';

function AppBar({
  bottomComponent,
  centerTitle = false,
  gap = 4,
  isBackBtnEnabled = true,
  leading,
  onBackPress,
  title,
  titleStyle,
}: {
  bottomComponent?: React.JSX.Element;
  centerTitle?: boolean;
  gap?: number;
  leading?: React.JSX.Element;
  isBackBtnEnabled?: boolean;
  onBackPress?: () => void;
  title: string;
  titleStyle?: TextStyle;
}): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {gap: gap}]}>
      <View style={styles.innerContainer}>
        {isBackBtnEnabled && (
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => {
              if (!!onBackPress) {
                onBackPress();
              }
              navigation.goBack();
            }}>
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
