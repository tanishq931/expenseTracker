import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './CategoryBtn.styles';
import {TextStyles} from '../../theme/textstyles';
import DownArrowIcon from '../../../assets/icons/DownArrowIcon';
import useBottomSheet from '../../utils/BottomSheet/useBottomSheet';
import {BOTTOMSHEET_TYPES} from '../../constants/constants';
import {CATEGORY} from '../../constants/types/UserDetails';

function CategoryBtn({
  selectedCategory,
  CategoryIcon,
}: {
  selectedCategory?: CATEGORY;
  CategoryIcon: any;
}) {
  const {openSheet} = useBottomSheet();

  return (
    <View style={styles.container}>
      <Text style={[styles.titleText, TextStyles.mediumText]}>Category</Text>
      <TouchableOpacity
        style={[
          styles.innerContainer,
          {
            justifyContent: !!selectedCategory ? 'flex-start' : 'space-between',
          },
        ]}
        onPress={() => openSheet(BOTTOMSHEET_TYPES.CATEGORY_LIST)}>
        {!!selectedCategory && (
          <View style={{backgroundColor: 'white', borderRadius: 8, padding: 2}}>
            <CategoryIcon height={22} width={22} />
          </View>
        )}
        <Text style={[styles.btnText, TextStyles.boldText]}>
          {selectedCategory?.name ?? 'Select'}
        </Text>
        {!selectedCategory && <DownArrowIcon />}
      </TouchableOpacity>
    </View>
  );
}

export default CategoryBtn;
