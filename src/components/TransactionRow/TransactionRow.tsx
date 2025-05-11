import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './TransactionRow.styles';
import {Colors} from '../../theme/color';
import {TextStyles} from '../../theme/textstyles';
import IconButton from '../IconButton/IconButton';
import EditIcon from '../../../assets/icons/EditIcon';
import DeleteIcon from '../../../assets/icons/DeleteIcon';
import {TRANSACTION} from '../../constants/types/Transaction';
import {getFormattedDateTime} from '../../utils/DateTimeFormat/DateFormatter';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

function TransactionRow({
  isFirst = false,
  isLast = false,
  isExpanded = false,
  onPress,
  data,
}: {
  isFirst?: boolean;
  isLast?: boolean;
  isExpanded: boolean;
  onPress: () => void;
  data: TRANSACTION;
}) {
  const currency = useSelector(
    (state: RootState) => state?.userProfile?.userDetails?.currency,
  );
  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <View
          style={{
            minHeight: 10,
            width: isFirst ? 0 : 1,
            backgroundColor: Colors.WHITE,
          }}></View>
        <View style={styles.logo}></View>
        <View
          style={{
            flexGrow: 1,
            minHeight: 25,
            width: isLast ? 0 : 1,
            backgroundColor: Colors.WHITE,
          }}></View>
      </View>
      <TouchableOpacity style={styles.secondContainer} onPress={onPress}>
        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text
              style={[
                {fontSize: 16, color: Colors.WHITE},
                TextStyles.boldText,
              ]}>
              {data?.title}
            </Text>
            <Text
              style={[
                {fontSize: 14, color: Colors.WHITE},
                TextStyles.mediumText,
              ]}>
              {currency} {data?.amount}
            </Text>
          </View>
          <View style={styles.dateContainer}>
            <Text
              style={[
                {fontSize: 14, color: Colors.WHITE},
                TextStyles.mediumText,
              ]}>
              {getFormattedDateTime(data?.createdAt)}
            </Text>
          </View>
        </View>
        {isExpanded && (
          <View style={styles.btnBar}>
            <IconButton
              btnText="Edit"
              onPress={() => {}}
              Icon={EditIcon}
              color={Colors.LIGHT_GREEN}
            />
            <IconButton
              btnText="Delete"
              onPress={() => {}}
              Icon={DeleteIcon}
              color={Colors.RED}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default TransactionRow;
