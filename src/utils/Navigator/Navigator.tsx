import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactNode} from 'react';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import {SCREENS} from '../../constants/screenNames';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../theme/color';
import HomeIcon from '../../../assets/icons/HomeIcon';
import BudgetIcon from '../../../assets/icons/AccountIcon';
import BankIcon from '../../../assets/icons/BankIcon';
import ChartIcon from '../../../assets/icons/ChartIcon';
import {TextStyles} from '../../theme/textstyles';
import styles from './Navigator.styles';
import Budget from '../../screens/Budget/Budget';
import Accounts from '../../screens/Accounts/Accounts';
import Charts from '../../screens/Charts/Charts';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: [styles.tabBarLabel, TextStyles.mediumText],
      }}>
      <BottomTab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: Colors.WHITE,
          tabBarIcon: ({focused, color, size}) => (
            <HomeIcon stroke={color} height={size} width={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREENS.LOGIN}
        component={Budget}
        options={{
          tabBarLabel: 'Budget',
          tabBarActiveTintColor: Colors.WHITE,
          tabBarInactiveTintColor: Colors.LIGHT_GREY,
          tabBarIcon: ({focused, color, size}) => <BudgetIcon stroke={color} />,
        }}
      />
      <BottomTab.Screen
        name={SCREENS.ACCOUNTS}
        component={Accounts}
        options={{
          tabBarLabel: 'Accounts',
          tabBarActiveTintColor: Colors.WHITE,
          tabBarInactiveTintColor: Colors.LIGHT_GREY,
          tabBarIcon: ({focused, color, size}) => <BankIcon stroke={color} />,
        }}
      />
      <BottomTab.Screen
        name={SCREENS.CHARTS}
        component={Charts}
        options={{
          tabBarLabel: 'Spends',
          tabBarActiveTintColor: Colors.WHITE,
          tabBarInactiveTintColor: Colors.LIGHT_GREY,
          tabBarIcon: ({focused, color, size}) => <ChartIcon stroke={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

function Navigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.HOME}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.HOME} component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
