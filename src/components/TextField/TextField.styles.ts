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
    height: 40,
  },
  inputStyles: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    color: Colors.WHITE,
    paddingLeft: 10,
    borderRadius: 8,
    fontSize: 12,
  },
  inputWithSuffix: {
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  inputWithPrefix: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
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
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prefixContainer: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRightWidth: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
