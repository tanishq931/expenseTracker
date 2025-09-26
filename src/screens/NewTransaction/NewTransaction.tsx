import React, {useEffect, useState} from 'react';
import BaseLayout from '../../layouts/BaseLayout';
import AppBar from '../../components/AppBar/AppBar';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './NewTransaction.styles';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import TextField from '../../components/TextField/TextField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';
import {Colors} from '../../theme/color';
import {
  ACCOUNTS_ICON,
  ICON_DATA,
  KEYBOARD_TYPE,
  TRANSACTION_TYPE,
} from '../../constants/constants';
import {numberWithTwoDecimal} from '../../utils/Regex/Regex';
import {getFormattedDateTime} from '../../utils/DateTimeFormat/DateFormatter';
import CalendarIcon from '../../../assets/icons/CalendarIcon';
import {
  getValidDate,
  isValidDate,
} from '../../utils/DateValidator/DateValidator';
import DropdownInput from '../../components/DropdownInput/DropdownInput';
import CategoryBtn from '../../components/CategoryBtn/CategoryBtn';
import handleBackBtnClickedOnSheet from '../../utils/BackHandlers/BottomSheetHandler';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTransaction,
  removeNewFormData,
  removeTransaction,
  setNewTransactionCategory,
  setPickedImageUrl,
} from '../../redux/TransactionSlice';
import {RootState} from '../../redux/store';
import {USER_ACCOUNT} from '../../constants/types/UserDetails';
import ImagePicker from '../../components/ImagePicker/ImagePicker';
import {TRANSACTION} from '../../constants/types/Transaction';
import {useNavigation, useRoute} from '@react-navigation/native';
import {formatString} from '../../utils/Helpers/formatString';
import DateTimePicker from 'react-native-modal-datetime-picker';

interface TRANSACTION_DATA {
  accountDebitedFrom: string;
  amount: number | string;
  billPath?: string;
  category?: string;
  createdAt: Date | string | undefined;
  description: string;
  id?: string;
  transactionType?: string;
}

function NewTransaction() {
  const dispatch = useDispatch();
  const routes = useRoute();
  const data = routes?.params?.data as TRANSACTION_DATA | undefined;
  const navigate = useNavigation();
  const userState = useSelector((state: RootState) => state?.userProfile);
  const [formData, setFormData] = useState<TRANSACTION_DATA>(
    data ?? {
      amount: '',
      createdAt: new Date(),
      description: '',
      category: '',
      accountDebitedFrom: '',
      transactionType: TRANSACTION_TYPE.EXPENSE,
    },
  );
  const transactionState = useSelector(
    (state: RootState) => state?.transactions,
  );
  const categoryId = transactionState?.newTransactionCategory;
  const imgUrl = transactionState?.pickedImgUrl;
  const selectedCategory = userState?.categories?.find(
    val => val?.id === categoryId,
  );

  const accountData = userState?.userAccounts?.map((item: USER_ACCOUNT) => {
    const Icon = ACCOUNTS_ICON[item?.icon];
    return {
      label: formatString(item?.name?.toLowerCase()),
      icon: <Icon height={24} width={24} />,
      value: item?.id,
    };
  });

  const transactionData = Object.values(TRANSACTION_TYPE).map(item => {
    return {
      label: formatString(item?.toLowerCase()),
      value: item,
    };
  });
  const CategoryIcon = ICON_DATA[selectedCategory?.name!];
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (!!data) {
      dispatch(setNewTransactionCategory(data?.category!));
      dispatch(setPickedImageUrl(data?.billPath));
    }
  }, []);

  // Handled State Changes
  const onChangeDesc = (val: string) => {
    setFormData(prev => ({...prev, description: val}));
  };

  const onChangeAmount = (val: string) => {
    if (!val || numberWithTwoDecimal.test(val))
      setFormData({
        ...formData,
        amount: val,
      });
  };

  const onChangeDateTime = (selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    setFormData({
      ...formData,
      createdAt: selectedDate,
    });
  };

  const onChangeDateInput = (val: string | Date, isFromBlur?: boolean) => {
    let date = val;
    if (isFromBlur && !isValidDate(date.toString())) {
      date = new Date(); // Fallback to current date if invalid
    } else if (isFromBlur) {
      date = getValidDate(val.toString());
    }
    setFormData({
      ...formData,
      createdAt: date,
    });
  };

  const onSubmit = () => {
    const payload: TRANSACTION = {
      ...formData,
      createdAt: formData?.createdAt?.toString()!,
      amount: Number(formData?.amount),
      category: categoryId,
      billPath: imgUrl,
      id: formData?.createdAt?.toString()!,
      transactionType: TRANSACTION_TYPE.EXPENSE,
    };
    if (!!data) {
      dispatch(removeTransaction(data?.id));
    }
    dispatch(addTransaction(payload));
    removeData();
    navigate.goBack();
  };

  const isSubmitBtnDisabled =
    !formData?.transactionType ||
    !formData?.description ||
    Number(formData?.amount) <= 0 ||
    !categoryId ||
    !formData?.accountDebitedFrom;

  const removeData = () => {
    dispatch(removeNewFormData());
  };

  handleBackBtnClickedOnSheet(removeData);

  return (
    <BaseLayout>
      <>
        <AppBar
          title="Add Transaction"
          isBackBtnEnabled={true}
          onBackPress={removeData}
        />
        <View style={styles.container}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.innerContainer}
            showsVerticalScrollIndicator={false}>
            <DropdownInput
              dropdownData={transactionData}
              onChangeValue={(val: {value: string}) => {
                setFormData({
                  ...formData,
                  transactionType: val?.value,
                });
              }}
              title="Transaction type"
              value={formData?.transactionType}
              placeholderText="Choose transaction type"
            />
            <TextField
              title="Description"
              value={formData?.description}
              onChange={onChangeDesc}
              onBlur={() => {}}
              maxLength={40}
            />
            <View style={styles.inputRow}>
              <View style={styles.halfInput}>
                <TextField
                  keyboardType={KEYBOARD_TYPE.NUMBERIC}
                  maxLength={8}
                  onChange={onChangeAmount}
                  prefix={
                    <Text style={{fontSize: 14, color: Colors.WHITE}}>
                      {' '}
                      Rs.
                    </Text>
                  }
                  value={formData?.amount.toString()}
                  title="Amount"
                />
              </View>
              <View style={styles.halfInput}>
                <TextField
                  title="Date"
                  keyboardType={KEYBOARD_TYPE.NUMBERIC}
                  value={getFormattedDateTime(formData?.createdAt!)}
                  onBlur={() => onChangeDateInput(formData?.createdAt!, true)}
                  onChange={onChangeDateInput}
                  suffix={
                    <TouchableOpacity
                      onPress={() => {
                        setShowDatePicker(true);
                      }}>
                      <CalendarIcon />
                    </TouchableOpacity>
                  }
                />
              </View>
            </View>
            <View style={styles.inputRow}>
              <CategoryBtn
                selectedCategory={selectedCategory}
                CategoryIcon={CategoryIcon}
              />
              <View style={styles.halfInput}>
                <DropdownInput
                  dropdownData={accountData}
                  onChangeValue={(val: {value: string}) => {
                    setFormData({
                      ...formData,
                      accountDebitedFrom: val?.value,
                    });
                  }}
                  title="Account"
                  value={formData?.accountDebitedFrom}
                />
              </View>
            </View>
            <ImagePicker imgUrl={imgUrl} />
          </KeyboardAwareScrollView>
          <ButtonComponent
            title={!!data ? 'Update' : 'Add Transaction'}
            onPress={onSubmit}
            disabled={isSubmitBtnDisabled}
          />
        </View>
        <DateTimePicker
          isVisible={showDatePicker}
          date={new Date(formData?.createdAt!)}
          mode="date"
          onConfirm={onChangeDateTime}
          onCancel={() => {
            setShowDatePicker(false);
          }}
          maximumDate={new Date()}
        />
      </>
    </BaseLayout>
  );
}

export default NewTransaction;
