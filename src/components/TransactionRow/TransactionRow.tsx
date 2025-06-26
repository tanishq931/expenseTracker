import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './TransactionRow.styles';
import {Colors} from '../../theme/color';
import {TextStyles} from '../../theme/textstyles';
import IconButton from '../IconButton/IconButton';
import EditIcon from '../../../assets/icons/EditIcon';
import DeleteIcon from '../../../assets/icons/DeleteIcon';
import {TRANSACTION} from '../../constants/types/Transaction';
import {getFormattedDateTime} from '../../utils/DateTimeFormat/DateFormatter';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/screenNames';
import {removeTransaction} from '../../redux/TransactionSlice';
import {getCategoryInfo} from '../../utils/Helpers/getCategoryData';
import {getAccountInfo} from '../../utils/Helpers/getAccountData';
import {formatString} from '../../utils/Helpers/formatString';
import {BOTTOMSHEET_TYPES, TRANSACTION_TYPE} from '../../constants/constants';
import useBottomSheet from '../../utils/BottomSheet/useBottomSheet';
import {setImageViewUrl} from '../../redux/UtilsSlice';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import * as Animatable from 'react-native-animateable';

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
  const dispatch = useDispatch();
  const {openSheet} = useBottomSheet();
  const navigate = useNavigation();
  const animatedHeight = useSharedValue(74);
  const animatedOpatcity = useSharedValue(0);

  const currency = useSelector(
    (state: RootState) => state?.userProfile?.userDetails?.currency,
  );
  const {CategoryIcon} = getCategoryInfo(data?.category);
  const {AccountIcon, accountName} = getAccountInfo(data?.accountDebitedFrom!);

  const onPressDelete = () => {
    dispatch(removeTransaction(data?.id));
  };

  const renderUpperRow = () => {
    return (
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, TextStyles.boldText]}>
            {formatString(data?.description)}
          </Text>
          <Text style={[styles.subTitleText, TextStyles.mediumText]}>
            {currency} {data?.amount}
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={[styles.smallText, TextStyles.mediumText]}>
            {getFormattedDateTime(data?.createdAt)}
          </Text>
          <View style={styles.accountContainer}>
            <Text style={[styles.smallText, TextStyles.mediumText]}>
              {data?.transactionType === TRANSACTION_TYPE.EXPENSE
                ? 'Debited from :'
                : data?.transactionType === TRANSACTION_TYPE.INCOME
                ? 'Credited to :'
                : 'Transferred from :'}
            </Text>
            <View style={styles.accountRow}>
              <Text style={[styles.smallText, TextStyles.mediumText]}>
                {formatString(accountName?.toLowerCase()!)}
              </Text>
              <AccountIcon height={16} width={16} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const animatedBottomStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animatedOpatcity.value, {duration: 300}),
    };
  });

  const expandedRow = () => {
    const {billPath} = data;
    return (
      <Animated.View style={[styles.expandedContainer, animatedBottomStyle]}>
        {billPath && (
          <TouchableOpacity
            onPress={() => {
              dispatch(setImageViewUrl(data?.billPath));
              openSheet(BOTTOMSHEET_TYPES.IMAGE_VIEWER);
            }}>
            <Image source={{uri: billPath}} style={styles.imgContainer} />
          </TouchableOpacity>
        )}
        <View style={styles.btnBar}>
          <IconButton
            btnText="Edit"
            onPress={() => navigate.navigate(SCREENS.NEW_TRANSACTION, {data})}
            Icon={EditIcon}
            color={Colors.LIGHT_GREEN}
          />
          <IconButton
            btnText="Delete"
            onPress={onPressDelete}
            Icon={DeleteIcon}
            color={Colors.RED}
          />
        </View>
      </Animated.View>
    );
  };

  const containerStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animatedHeight.value, {duration: 200}),
    };
  });

  useEffect(() => {
    if (animatedHeight.value !== 74 && !isExpanded) {
      animatedHeight.value = 74;
    }
  }, [isExpanded]);

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <View style={styles.stepContainer}>
        <View
          style={{
            minHeight: 10,
            width: isFirst ? 0 : 1,
            backgroundColor: Colors.WHITE,
          }}></View>
        <View style={styles.logo}>
          <CategoryIcon height={30} width={30} />
        </View>
        <View
          style={{
            flexGrow: 1,
            minHeight: 25,
            width: isLast ? 0 : 1,
            backgroundColor: Colors.WHITE,
          }}></View>
      </View>
      <TouchableOpacity
        style={styles.secondContainer}
        onPress={() => {
          onPress();
          animatedHeight.value = isExpanded ? 74 : !data?.billPath ? 116 : 328;
          animatedOpatcity.value = isExpanded ? 0 : 1;
        }}>
        {renderUpperRow()}
        {isExpanded && expandedRow()}
      </TouchableOpacity>
    </Animated.View>
  );
}

export default TransactionRow;
