import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  googleBtn: {
    flexDirection: 'row',
    marginHorizontal: 40,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    height: 48,
    gap: 8,
  },
  googleSignInText: {
    fontSize: 18,
    lineHeight: 25,
    color: Colors.BLACK,
  },
});

export default styles;
