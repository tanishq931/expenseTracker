import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  loginText: {
    marginTop: 32,
    fontSize: 24,
    lineHeight: 30,
    color: Colors.WHITE,
  },
  loginForm: {
    paddingVertical: 20,
    gap: 20,
  },
  forgotPassText: {
    textAlign: 'right',
    fontSize: 12,
    color: Colors.LIGHT_GREEN,
    marginBottom: 12,
  },
  loginBtn: {
    // height:48,
    marginTop: 20,
    alignSelf: 'center',
    width: 200,
  },
});

export default styles;
