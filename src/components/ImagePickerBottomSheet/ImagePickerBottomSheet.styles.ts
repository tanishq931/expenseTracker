import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    gap: 18,
    padding: 20,
    paddingBottom: 60,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  btnContainer: {
    alignItems: 'center',
    borderColor: Colors.WHITE,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    height: 42,
  },
  btnText: {
    fontSize: 14,
    color: Colors.WHITE,
  },
});

export default styles;
