import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  handleContainer: {backgroundColor: Colors.BACKGROUND, paddingVertical: 15},
  handler: {backgroundColor: Colors.WHITE, height: 5, width: 100},
  background: {backgroundColor: Colors.BACKGROUND},
});

export default styles;
