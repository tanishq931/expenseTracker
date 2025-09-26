import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  floatingBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 55,
    width: 55,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
