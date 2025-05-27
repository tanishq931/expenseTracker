import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.WHITE,
    borderRadius: 6,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  btnTitle: {
    fontSize: 14,
    color: Colors.WHITE,
  },
});

export default styles;
