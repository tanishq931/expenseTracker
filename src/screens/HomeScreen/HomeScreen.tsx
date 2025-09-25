import React, {useState} from 'react';
import {SectionList, Text, TouchableOpacity, View} from 'react-native';
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
import DownArrowIcon from '../../../assets/icons/DownArrowIcon';
import UserProfileIcon from '../../../assets/icons/UserProfileIcon';
import {Colors} from '../../theme/color';
import {formatTransactions} from '../../utils/Formatter/FormatTransactions';
import UpArrowIcon from '../../../assets/icons/UpArrowIcon';

function HomeScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTx, setSelectedTx] = useState<string>('');
  const [collapsedSections, setCollapsedSections] = useState<Array<string>>([]);
  const transactions = useSelector(
    (state: RootState) => state?.transactions?.userTransactions,
  );

  const formattedTransactions = formatTransactions(
    transactions,
    activeTab === 0
      ? [TRANSACTION_TYPE.EXPENSE, TRANSACTION_TYPE.INCOME]
      : TRANSACTION_TYPE.TRANSFER,
  );

  const renderItem = ({
    item,
    index,
    section,
  }: {
    item: TRANSACTION;
    index: number;
    section: {title: string; data: TRANSACTION[]};
  }) => {
    if (collapsedSections.includes(section.title)) {
      return <View style={styles.topSpacer}></View>;
    }
    return (
      <TransactionRow
        key={index}
        data={item}
        isExpanded={item?.id === selectedTx}
        isFirst={index === 0}
        isLast={index === section.data.length - 1}
        onPress={() => {
          if (selectedTx === item?.id) {
            setSelectedTx('');
          } else {
            setSelectedTx(item?.id);
          }
        }}
      />
    );
  };

  console.log('formattedTransactions', formattedTransactions.length);

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
          contentContainerStyle={styles.listContainer}
          sections={formattedTransactions}
          renderItem={renderItem}
          renderSectionHeader={({section: {title}}) => {
            const isCollapsed = collapsedSections.includes(title);
            return (
              <TouchableOpacity
                style={styles.sectionHeader}
                onPress={() => {
                  if (isCollapsed) {
                    setCollapsedSections(prev => {
                      return prev.filter(item => item !== title);
                    });
                    setSelectedTx('');
                  } else {
                    setCollapsedSections(prev => [...prev, title]);
                  }
                }}>
                <Text style={{fontSize: 14, color: 'white'}}>{title}</Text>
                {isCollapsed ? <DownArrowIcon /> : <UpArrowIcon />}
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={
            <View style={styles.emptyListContainer}>
              <Text style={styles.emptyText}>
                Have Money! why not spend it?
              </Text>
            </View>
          }
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
