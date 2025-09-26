import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';
import {TextStyles} from '../../theme/textstyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    padding: 16,
  },
  currentBalContainer: {
    borderWidth: 1,
    borderColor: Colors.ORANGE_1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  currentBalText: {
    fontSize: 16,
    color: Colors.WHITE,
    ...TextStyles.mediumText,
  },
  amountText: {
    fontSize: 16,
    color: Colors.ORANGE_1,
    ...TextStyles.boldText,
  },
  listContainer: {
    flexGrow: 1,
    paddingVertical: 16,
  },
  divider: {
    height: 16,
  },
});

export default styles;
