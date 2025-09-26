import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';
import {TextStyles} from '../../theme/textstyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSpacer: {
    height: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 8,
    justifyContent: 'space-between',
  },
  userProfile: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: Colors.WHITE,
  },
  header: {height: 45, justifyContent: 'center'},
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  emptyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#90e0ef',
    ...TextStyles.lightText,
  },
});

export default styles;
