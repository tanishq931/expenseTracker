import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  titleText: {
    fontSize: 14,
    color: Colors.WHITE,
  },
  uploadContainer: {
    height: 200,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadTextContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    padding: 20,
  },
  uploadText: {
    color: Colors.WHITE,
    fontSize: 16,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  deleteIcon: {
    position: 'absolute',
    height: 30,
    width: 30,
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
