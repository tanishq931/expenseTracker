import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';
import {TextStyles} from '../../theme/textstyles';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.BACKGROUND},
  userContainer: {padding: 20, gap: 12, alignItems: 'center'},
  userProfile: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: Colors.GREY,
  },
  userDetailsContainer: {gap: 8, alignItems: 'center'},
  userName: {
    fontSize: 14,
    color: Colors.WHITE,
    ...TextStyles.boldText,
  },
  userEmail: {
    fontSize: 12,
    color: Colors.WHITE,
    ...TextStyles.mediumText,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.GREY,
  },
  rowsContainer: {
    gap: 8,
    paddingVertical: 12,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
