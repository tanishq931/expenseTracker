import {StackActions} from '@react-navigation/native';

// Custom navigation helper function
export const pushReplacement = (
  navigation: any,
  routeName: string,
  params = {},
) => {
  navigation.dispatch(StackActions.replace(routeName, params));
};
