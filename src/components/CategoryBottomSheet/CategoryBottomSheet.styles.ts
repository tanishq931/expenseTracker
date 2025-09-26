import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingBottom: 40,
  },
  categoryContainer: {
    alignItems: 'center',
    padding: 25,
    width: '33%',
    gap: 12,
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 12,
    textAlign: 'center',
  },
  iconContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default styles;
