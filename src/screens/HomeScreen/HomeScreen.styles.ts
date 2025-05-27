import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
