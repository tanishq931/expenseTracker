import React from 'react';
import {Text, View} from 'react-native';
import styles from './AppTitle.styles';
import {TextStyles} from '../../theme/textstyles';

function AppTitle() {
  return (
    <View style={styles.titleContainer}>
      <Text style={[styles.titleText, TextStyles.boldText]}>
        <Text style={styles.titleCapitalText}>E</Text>
        xpense
      </Text>
      <Text style={[styles.titleText, TextStyles.boldText]}>
        <Text style={styles.titleCapitalText}>T</Text>
        racker
      </Text>
    </View>
  );
}

export default AppTitle;
