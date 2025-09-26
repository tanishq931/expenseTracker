import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useBottomSheet from '../../utils/BottomSheet/useBottomSheet';
import styles from './CategoryBottomSheet.styles';
import {RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {CATEGORY} from '../../constants/types/UserDetails';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {ICON_DATA} from '../../constants/constants';
import {setNewTransactionCategory} from '../../redux/TransactionSlice';
import {Colors} from '../../theme/color';
import {TextStyles} from '../../theme/textstyles';

function CatergoryBottomSheet() {
  const {closeSheet} = useBottomSheet();
  const selectedCategory = useSelector(
    (state: RootState) => state?.transactions?.newTransactionCategory,
  );
  const dispatch = useDispatch();

  const categories = useSelector(
    (state: RootState) => state?.userProfile?.categories,
  );

  const renderItem = ({item}: {item: CATEGORY}): React.JSX.Element => {
    const Icon = ICON_DATA[item?.name];
    return (
      <TouchableOpacity
        key={item?.id}
        onPress={() => {
          dispatch(setNewTransactionCategory(item?.id));
          closeSheet();
        }}
        style={styles.categoryContainer}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor:
                selectedCategory === item?.id ? Colors.ORANGE : Colors.WHITE,
            },
          ]}>
          <Icon height={30} width={30} />
        </View>
        <Text
          style={[
            styles.iconText,
            TextStyles.mediumText,
            {
              color:
                selectedCategory === item?.id ? Colors.ORANGE : Colors.WHITE,
            },
          ]}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <BottomSheetFlatList
      data={categories}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      numColumns={3}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default CatergoryBottomSheet;
