import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import styles from './HomeScreen.styles';
import AppBar from '../../components/AppBar/AppBar';
import BaseLayout from '../../layouts/BaseLayout';
import TabBar from '../../components/TabBar/TabBar';
import AddIcon from '../../../assets/icons/AddIcon';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/screenNames';
import TransactionRow from '../../components/TransactionRow/TransactionRow';
import {TRANSACTION_TYPE} from '../../constants/constants';
import {handleExit} from '../../utils/BackHandlers/ExitHandler';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

function HomeScreen() {
  const navigate = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const transactions = useSelector(
    (state: RootState) => state?.transactions?.userTransactions,
  );

  const filteredTransaction = transactions.filter(item => {
    return (
      item?.transactionType === TRANSACTION_TYPE.EXPENSE ||
      item?.transactionType === TRANSACTION_TYPE.INCOME
    );
  });

  const renderItem = ({item, index}) => {
    return (
      <TransactionRow
        key={index}
        data={item}
        isExpanded={index === selectedIndex}
        isFirst={index === 0}
        isLast={index === filteredTransaction.length - 1}
        onPress={() => {
          if (selectedIndex === index) {
            setSelectedIndex(-1);
          } else {
            setSelectedIndex(index);
          }
        }}
      />
    );
  };

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
        <View style={styles.topSpacer}></View>
        <FlatList data={transactions} renderItem={renderItem} />
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
