import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  outerContainer: {paddingHorizontal: 15, paddingTop: 0, paddingBottom: 30},
  container: {
    minHeight: 300,
    maxHeight: 500,
    paddingBottom: 30,
  },
  image: {height: '100%', borderRadius: 20},
  crossbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    position: 'absolute',
    top: 10,
    right: 5,
  },
});

export default styles;
