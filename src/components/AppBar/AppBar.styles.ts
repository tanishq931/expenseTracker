import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';
import {PLATFORM_TYPE} from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    backgroundColor: Colors.BACKGROUND,
    elevation: 30,
    shadowColor: Colors.WHITE,
    shadowRadius: 10,
    justifyContent: 'center',
    paddingTop: Platform.OS === PLATFORM_TYPE.ANDROID ? 10 : 0,
  },
  innerContainer: {
    paddingHorizontal: 20,
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
  backBtn: {
    justifyContent: 'center',
    position: 'absolute',
    height: 22,
    width: 22,
    paddingTop: 5,
    top: 0,
    bottom: 0,
  },
});

export default styles;
