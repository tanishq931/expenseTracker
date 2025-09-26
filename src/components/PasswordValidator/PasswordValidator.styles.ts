import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  checkRow: {
    flexDirection: 'row',
    gap: 8,
  },
  iconContainer: {
    height: 14,
    width: 14,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  rowText: {
    fontSize: 12,
  },
});

export default styles;
