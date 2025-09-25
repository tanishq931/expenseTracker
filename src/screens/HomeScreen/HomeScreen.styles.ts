import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 55,
    width: 55,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSpacer: {
    height: 10,
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
});

export default styles;
