import React from 'react';
import {View} from 'react-native';
import styles from './HomeScreen.styles';
import AppBar from '../../components/AppBar/AppBar';
import BaseLayout from '../../layouts/BaseLayout';

function HomeScreen() {
  return (
    <BaseLayout>
      <View style={styles.container}>
        <AppBar title="HomeScreen" centerTitle={true} />
      </View>
    </BaseLayout>
  );
}

export default HomeScreen;
