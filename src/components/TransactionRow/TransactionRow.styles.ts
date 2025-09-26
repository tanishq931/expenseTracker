import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    backgroundColor: Colors.BACKGROUND,
  },
  stepContainer: {
    alignItems: 'center',
  },
  secondContainer: {
    paddingVertical: 10,
    marginTop: 4,
    flex: 1,
    gap: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  titleContainer: {
    flex: 1,
    gap: 4,
  },
  titleText: {fontSize: 16, color: Colors.WHITE},
  subTitleText: {fontSize: 14, color: Colors.WHITE},
  smallText: {fontSize: 12, color: Colors.WHITE},
  dateContainer: {
    gap: 4,
    alignItems: 'flex-end',
  },
  btnBar: {
    flexDirection: 'row',
    gap: 8,
  },
  expandedContainer: {
    gap: 12,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  accountText: {
    fontSize: 14,
    color: Colors.RED,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  imgContainer: {
    height: 200,
    width: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
});

export default styles;
