import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    padding: 20,
    gap: 20,
  },
  innerContainer: {
    flexGrow: 1,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    gap: 20,
    padding: 20,
    paddingBottom: 0,
  },
  halfInput: {flex: 1},
  inputRow: {
    flexDirection: 'row',
    gap: 10,
  },
  categoryBtn: {
    flex: 1,
    height: 50,
  },
});

export default styles;
