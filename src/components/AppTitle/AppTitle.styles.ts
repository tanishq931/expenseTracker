import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  titleCapitalText: {
    fontSize: 40,
    color: Colors.GREEN,
  },
  titleText: {
    fontSize: 32,
    color: Colors.WHITE,
  },
});

export default styles;
