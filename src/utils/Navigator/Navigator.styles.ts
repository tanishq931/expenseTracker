import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  tabBar: {
    height: 65,
    backgroundColor: Colors.BACKGROUND ,
  },
  tabBarItem: {
    paddingVertical: 5,
  },
  tabBarLabel: {fontSize: 14},
});

export default styles;
