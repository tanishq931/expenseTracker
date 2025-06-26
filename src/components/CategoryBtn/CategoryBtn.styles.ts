import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  titleText: {
    fontSize: 14,
    color: Colors.WHITE,
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: Colors.WHITE,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  btnText: {
    fontSize: 12,
    color: Colors.WHITE,
  },
});

export default styles;
