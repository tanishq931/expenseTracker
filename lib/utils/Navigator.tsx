import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {SCREENS} from '../constants/screenNames';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function Navigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.HOME}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
