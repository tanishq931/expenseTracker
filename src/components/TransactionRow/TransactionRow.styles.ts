import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
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
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  titleContainer: {
    flex: 1,
    gap: 4,
  },
  dateContainer: {
    gap: 4,
  },
  btnBar: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default styles;
