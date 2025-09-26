import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  mainContainer: {
    gap: 12,
  },
  titleText: {
    fontSize: 14,
    color: Colors.WHITE,
  },
  container: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  dropDownContainer: {
    backgroundColor: Colors.BACKGROUND,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: Colors.WHITE,
    borderWidth: 1,
  },
  placeHolderText: {
    fontSize: 16,
    color: Colors.WHITE,
    lineHeight: 20,
  },
  selectedText: {
    fontSize: 12,
    color: Colors.WHITE,
  },
  itemRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  itemText: {
    fontSize: 12,
    color: Colors.WHITE,
    lineHeight: 20,
  },
  icon: {width: 24, height: 24},
});

export default styles;
