import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './Accounts.styles';
import AppBar from '../../components/AppBar/AppBar';
import BaseLayout from '../../layouts/BaseLayout';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import AccountBox from '../../components/AccountBox/AccountBox';
import {USER_ACCOUNT} from '../../constants/types/UserDetails';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {getFormattedAmount} from '../../utils/Formatter/getFormattedAmount';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import {removeAccount} from '../../redux/UserSlice';
import {STRINGS} from '../../constants/string';
import {getTransactions} from '../../redux/TransactionSlice';

function Accounts(): React.JSX.Element {
  const userAccounts = useSelector(
    (state: RootState) => state.userProfile.userAccounts,
  );
  const dispatch: AppDispatch = useDispatch();

  const [deleteModal, setDeleteModal] = useState<{
    isVisible: boolean;
    selectedIndex?: number;
  }>({
    isVisible: false,
  });

  const remainingWalletBalance = userAccounts.reduce(
    (totalBalance, account) => {
      return totalBalance + account.currentBalance;
    },
    0,
  );

  const renderItem = ({item, index}: {item: USER_ACCOUNT; index: number}) => {
    return (
      <AccountBox
        account={item}
        onPressEdit={() => {}}
        onPressDelete={() => {
          setDeleteModal({
            isVisible: true,
            selectedIndex: index,
          });
        }}
        modifyBtnsEnabled={userAccounts.length > 1}
      />
    );
  };

  const onPressDelete = (selectedIndex: number) => {
    dispatch(removeAccount(userAccounts[selectedIndex]?.id));
    setDeleteModal({isVisible: false});
    setTimeout(() => {
      dispatch(getTransactions());
    }, 500);
  };

  return (
    <BaseLayout>
      <>
        <AppBar title="Accounts" />
        <View style={styles.container}>
          <View style={styles.currentBalContainer}>
            <Text style={styles.currentBalText}>Remaining Balance :</Text>
            <Text style={styles.amountText}>
              Rs.{getFormattedAmount(remainingWalletBalance)}
            </Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            data={userAccounts}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={styles.divider}></View>}
          />
          <FloatingButton onPress={() => {}} />
        </View>
        <DeleteModal
          isVisible={deleteModal.isVisible}
          onClose={() => setDeleteModal({isVisible: false})}
          onPressDelete={() => onPressDelete(deleteModal?.selectedIndex!)}
          title={STRINGS.ACCOUNT_DELETE_TITLE}
          subTitle={STRINGS.ACCOUNT_DELETE_SUBTITLE}
        />
      </>
    </BaseLayout>
  );
}

export default Accounts;
