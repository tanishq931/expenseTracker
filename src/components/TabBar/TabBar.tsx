import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './TabBar.styles';
import {TextStyles} from '../../theme/textstyles';
import {Colors} from '../../theme/color';
function TabBar({
  titleArr,
  onPress,
  activeIndex,
}: {
  titleArr: Array<String>;
  onPress: (val: number) => void;
  activeIndex: number;
}): React.JSX.Element {
  return (
    <View style={styles.container}>
      {titleArr.map((val, index) => {
        return (
          <TouchableOpacity
            key={`${index}${val}`}
            disabled={index===activeIndex}
            onPress={() => onPress(index)}
            style={[
              styles.tab,
              {borderBottomWidth: activeIndex === index ? 2 : 0},
            ]}>
            <Text
              style={[
                {fontSize: 14, color: Colors.WHITE},
                TextStyles.mediumText,
              ]}>
              {val}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
