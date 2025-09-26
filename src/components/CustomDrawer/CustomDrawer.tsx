import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './CustomDrawer.styles';
import LogoutIcon from '../../../assets/icons/LogoutIcon';
import {Colors} from '../../theme/color';
import {getAuth} from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {toggleUserAuthentication} from '../../redux/UserSlice';

function CustomDrawer() {
  const auth = getAuth();
  const dispatch: AppDispatch = useDispatch();

  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.userProfile}></View>
        <View style={styles.userDetailsContainer}>
          <Text style={styles.userName}>Tanishq Sharma</Text>
          <Text style={styles.userEmail}>a@g.com</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.rowsContainer}>
        <TouchableOpacity
          style={styles.btnRow}
          onPress={() =>
            Alert.alert('Are you sure you want to logout?', '', [
              {
                text: 'No',
                onPress: () => {},
              },
              {
                text: 'Yes',
                onPress: () => {
                  auth.signOut();
                  dispatch(toggleUserAuthentication(false));
                },
              },
            ])
          }>
          <LogoutIcon stroke={Colors.WHITE} />
          <Text style={styles.userEmail}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
