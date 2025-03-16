import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    backgroundColor: Colors.NAVY_BLUE,
    elevation: 50,
    shadowColor: Colors.WHITE,
    shadowRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 22,
    color: Colors.WHITE,
  },
  leadingView: {
    justifyContent: 'center',
    position: 'absolute',
    left: 15,
    top: 0,
    bottom: 0,
  },
});

export default styles;
