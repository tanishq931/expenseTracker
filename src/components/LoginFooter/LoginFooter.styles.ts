import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    gap: 12,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  dontText: {
    fontSize: 14,
    color: Colors.WHITE,
  },
  registerText: {
    fontSize: 12,
    color: Colors.LIGHT_GREEN,
  },
  dividerContainer: {
    alignSelf: 'center',
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.WHITE,
  },
  dividerText: {
    fontSize: 12,
    color: Colors.WHITE,
  },
});

export default styles;
