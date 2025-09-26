import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './AccountBox.styles';
import EditIcon from '../../../assets/icons/EditIcon';
import DeleteIcon from '../../../assets/icons/DeleteIcon';
import {USER_ACCOUNT} from '../../constants/types/UserDetails';
import {formatString} from '../../utils/Helpers/formatString';
import {ACCOUNTS_ICON} from '../../constants/constants';
import {getFormattedAmount} from '../../utils/Formatter/getFormattedAmount';

interface AccountBoxProps {
  account: USER_ACCOUNT;
  onPressEdit: () => void;
  onPressDelete: () => void;
  modifyBtnsEnabled: boolean;
}

function AccountBox({
  account,
  onPressDelete,
  onPressEdit,
  modifyBtnsEnabled,
}: AccountBoxProps) {
  const Icon = ACCOUNTS_ICON[account.icon];

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Icon height={24} width={24} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {formatString(account.name.toLowerCase())}
          </Text>
        </View>
        {modifyBtnsEnabled && (
          <>
            <TouchableOpacity onPress={onPressEdit}>
              <EditIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressDelete}>
              <DeleteIcon />
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.divider}></View>
      <View style={styles.bottomContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.subTitleText}>Starting Balance</Text>
          <Text style={styles.subTitleText}>
            Rs.{getFormattedAmount(account?.startingBalance)}
          </Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.amountText}>Current Balance</Text>
          <Text style={styles.amountText}>
            Rs.{getFormattedAmount(account?.currentBalance)}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default AccountBox;
