import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/color';
import {TextStyles} from '../../theme/textstyles';

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  crossBtn: {
    alignSelf: 'flex-start',
  },
  textContainer: {
    padding: 20,
    gap: 12,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    color: Colors.WHITE,
    textAlign: 'center',
    ...TextStyles.mediumText,
  },
  subTitleText: {
    fontSize: 14,
    marginHorizontal: 30,
    color: Colors.LIGHT_GREY,
    textAlign: 'center',
    ...TextStyles.mediumText,
  },
  btnBar: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 12,
  },
  btnStyle: {
    flex: 1,
    paddingHorizontal: 0,
  },
});

export default styles;
