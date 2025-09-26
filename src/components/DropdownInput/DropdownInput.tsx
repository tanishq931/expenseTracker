import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';
import styles from './DropdownInput.styles';
import {Dropdown} from 'react-native-element-dropdown';
import {TextStyles} from '../../theme/textstyles';
import {Colors} from '../../theme/color';

interface DropdownItem {
  label: string;
  value: string;
  icon?: ReactNode;
}

interface DropdownInputProps {
  dropdownData: Array<{label: string; value: string; icon?: ReactNode}>;
  onChangeValue: (value: DropdownItem) => void;
  placeholderText?: string;
  title?: string;
  value: string;
}

function DropdownInput({
  dropdownData,
  onChangeValue,
  placeholderText,
  title,
  value,
}: DropdownInputProps) {
  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.titleText, TextStyles.mediumText]}>{title}</Text>
      <Dropdown
        style={styles.container}
        containerStyle={styles.dropDownContainer}
        placeholderStyle={[styles.placeHolderText, TextStyles.mediumText]}
        itemContainerStyle={styles.itemContainer}
        selectedTextStyle={[styles.selectedText, TextStyles.mediumText]}
        placeholder={placeholderText}
        activeColor={Colors.MODERATE_BLUE}
        value={value}
        data={dropdownData}
        iconStyle={styles.icon}
        iconColor={Colors.WHITE}
        labelField="label"
        valueField="value"
        onChange={onChangeValue}
        renderItem={item => {
          const {icon, label} = item;
          return (
            <View style={styles.itemRow}>
              {icon}
              <Text style={[styles.itemText, TextStyles.mediumText]}>
                {label}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default DropdownInput;
