import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.BACKGROUND,
  },
  tab: {
    paddingVertical: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderBottomColor: Colors.WHITE,
  },
});

export default styles;
