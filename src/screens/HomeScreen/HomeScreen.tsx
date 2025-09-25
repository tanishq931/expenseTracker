import React, {useState} from 'react';
import {
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {TRANSACTION} from '../../constants/types/Transaction';
import moment from 'moment';
import DownArrowIcon from '../../../assets/icons/DownArrowIcon';
import UserProfileIcon from '../../../assets/icons/UserProfileIcon';
import {Colors} from '../../theme/color';

function HomeScreen() {
  const navigation = useNavigation();
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

  const groupTransactions = () => {
    const groups: any = {};

    filteredTransaction.forEach(tx => {
      const monthYear = moment(tx.createdAt).format('MMM YYYY').toString(); // e.g. FEB 2025
      if (!groups[monthYear]) {
        groups[monthYear] = [];
      }
      groups[monthYear].push(tx);
    });

    // Convert object → array for SectionList
    return Object.keys(groups).map(month => ({
      title: month,
      data: groups[month],
    }));
  };

  const groupedTransactions = groupTransactions();

  const renderItem = ({item, index}: {item: TRANSACTION; index: number}) => {
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
          leading={
            <TouchableOpacity
              style={styles.userProfile}
              onPress={() => {
                navigation.openDrawer?.();
              }}>
              <UserProfileIcon stroke={Colors.WHITE} height={20} width={20} />
            </TouchableOpacity>
          }
          isBackBtnEnabled={false}
          topContainerStyle={styles.header}
        />
        <View style={styles.topSpacer}></View>
        <SectionList
          sections={groupedTransactions}
          renderItem={renderItem}
          renderSectionHeader={({section: {title}}) => {
            return (
              <TouchableOpacity style={styles.sectionHeader}>
                <Text style={{fontSize: 14, color: 'white'}}>{title}</Text>
                <DownArrowIcon />
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity
          style={styles.floatingBtn}
          onPress={() => navigation.navigate(SCREENS.NEW_TRANSACTION)}>
          <AddIcon />
        </TouchableOpacity>
      </View>
    </BaseLayout>
  );
}

export default HomeScreen;
