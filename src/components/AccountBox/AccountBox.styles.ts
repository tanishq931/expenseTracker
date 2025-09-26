import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';
import {TextStyles} from '../../theme/textstyles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 8,
    gap: 12,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: Colors.WHITE,
  },
  logoContainer: {
    height: 35,
    width: 35,
    // borderRadius: 24,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.WHITE,
    // borderColor: Colors.WHITE,
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    color: Colors.WHITE,
    ...TextStyles.boldText,
  },
  subTitleText: {
    fontSize: 14,
    color: Colors.WHITE,
    ...TextStyles.mediumText,
  },
  amountText: {
    fontSize: 16,
    color: Colors.ORANGE_1,
    ...TextStyles.boldText,
  },
  bottomContainer: {
    paddingHorizontal: 12,
    gap: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
