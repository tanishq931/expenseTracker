import React from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
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
  topContainerStyle,
}: {
  bottomComponent?: React.JSX.Element;
  centerTitle?: boolean;
  gap?: number;
  leading?: React.JSX.Element;
  isBackBtnEnabled?: boolean;
  onBackPress?: () => void;
  title: string;
  titleStyle?: TextStyle;
  topContainerStyle?: ViewStyle;
}): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {gap: gap}]}>
      <View style={[styles.innerContainer, topContainerStyle]}>
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
        <Text
          style={[
            styles.titleText,
            TextStyles.boldText,
            titleStyle,
            {
              textAlign: centerTitle ? 'center' : 'left',
              marginLeft: centerTitle
                ? 0
                : leading || isBackBtnEnabled
                ? 20
                : 0,
            },
          ]}>
          {title}
        </Text>
        {!!leading && <View style={styles.leadingView}>{leading}</View>}
      </View>
      {bottomComponent}
    </View>
  );
}

export default AppBar;
