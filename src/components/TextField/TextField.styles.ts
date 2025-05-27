import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  titleText: {
    fontSize: 14,
    color: Colors.WHITE,
    marginBottom: 6,
  },
  isRequiredText: {
    color: Colors.GREY,
    marginTop: 5,
    fontSize: 20,
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 48,
  },
  inputStyles: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    color: Colors.WHITE,
    paddingLeft: 10,
    borderRadius: 6,
  },
  inputWithSuffix: {
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  errorText: {
    fontSize: 12,
    color: Colors.RED,
  },
  suffixContainer: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderLeftWidth: 0,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
