import React from 'react';
import {View} from 'react-native';
import AppBar from '../AppBar/AppBar';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SCREENS} from '../../constants/screenNames';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const Drawer = createDrawerNavigator();

function HomeHeader() {
  return (
    <View>
      <Drawer.Navigator>
        <Drawer.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Drawer.Screen name={SCREENS.LOGIN} component={HomeScreen} />
      </Drawer.Navigator>
      {/* <AppBar title="HomeScreen" centerTitle={true} /> */}
    </View>
  );
}

export default HomeHeader;
