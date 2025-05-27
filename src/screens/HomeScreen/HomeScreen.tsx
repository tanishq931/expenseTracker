import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import styles from './HomeScreen.styles';
import AppBar from '../../components/AppBar/AppBar';
import BaseLayout from '../../layouts/BaseLayout';
import TabBar from '../../components/TabBar/TabBar';
import AddIcon from '../../../assets/icons/AddIcon';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/screenNames';
import TransactionRow from '../../components/TransactionRow/TransactionRow';
import {TRANSACTION} from '../../constants/types/Transaction';
import {TRANSACTION_TYPE} from '../../constants/constants';
import {handleExit} from '../../utils/ExitHandler/ExitHandler';

function HomeScreen() {
  const navigate = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const transactionData: Array<TRANSACTION> = [
    {
      title: 'Food',
      description: 'Food @Sector-30',
      amount: 100,
      createdAt: new Date(),
      id: '12312',
      category: 'Food',
      transactionType: TRANSACTION_TYPE.EXPENSE,
    },
    {
      title: 'Food',
      description: 'Food @Sector-30',
      amount: 100,
      createdAt: new Date(),
      id: '1232',
      category: 'Food',
      transactionType: TRANSACTION_TYPE.EXPENSE,
    },
  ];

  handleExit();

  return (
    <BaseLayout>
      <View style={styles.container}>
        <AppBar
          title="HomeScreen"
          centerTitle={true}
          gap={22}
          bottomComponent={
            <TabBar
              titleArr={['Transactions', 'Transfers']}
              onPress={val => setActiveTab(val)}
              activeIndex={activeTab}
            />
          }
          isBackBtnEnabled={false}
        />
        <View style={{height: 20}}></View>
        {transactionData.map((val, index) => {
          return (
            <TransactionRow
              key={index}
              data={val}
              isExpanded={index === selectedIndex}
              isFirst={index === 0}
              isLast={index === transactionData.length - 1}
              onPress={() => {
                if (selectedIndex === index) {
                  setSelectedIndex(-1);
                } else {
                  setSelectedIndex(index);
                }
              }}
            />
          );
        })}
        <TouchableOpacity
          style={styles.floatingBtn}
          onPress={() => navigate.navigate(SCREENS.NEW_TRANSACTION)}>
          <AddIcon />
        </TouchableOpacity>
      </View>
    </BaseLayout>
  );
}

export default HomeScreen;
