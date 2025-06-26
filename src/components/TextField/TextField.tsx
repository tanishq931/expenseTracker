import React, {ReactNode} from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './TextField.styles';
import {Colors} from '../../theme/color';
import {TextStyles} from '../../theme/textstyles';
import {KEYBOARD_TYPE} from '../../constants/constants';

function TextField({
  editable = true,
  error,
  hideText = false,
  isRequired = false,
  keyboardType = KEYBOARD_TYPE.DEFAULT,
  onBlur,
  onChange,
  placeholderText,
  suffix,
  title = '',
  value,
}: {
  editable?: boolean;
  error?: string;
  hideText?: boolean;
  isRequired?: boolean;
  keyboardType?: string;
  onBlur: (e: any) => void;
  onChange: (val: string) => void;
  placeholderText?: string;
  suffix?: ReactNode;
  title?: string;
  value: string;
}): React.JSX.Element {
  const isSuffix = !!suffix;
  return (
    <View style={styles.container}>
      {!!title && (
        <Text
          style={[
            styles.titleText,
            TextStyles.mediumText,
            {opacity: editable ? 1 : 0.5},
          ]}>
          {title} {isRequired && <Text style={styles.isRequiredText}>*</Text>}
        </Text>
      )}
      <View style={styles.innerContainer}>
        <TextInput
          value={value}
          onChangeText={onChange}
          selectionColor={Colors.WHITE}
          style={[
            styles.inputStyles,
            isSuffix ? styles.inputWithSuffix : {},
            {opacity: editable ? 1 : 0.5},
          ]}
          onBlur={onBlur}
          keyboardType={keyboardType}
          secureTextEntry={hideText}
          editable={editable}
          autoCapitalize='none'
        />
        {isSuffix && (
          <View style={[styles.suffixContainer, {opacity: editable ? 1 : 0.5}]}>
            {suffix}
          </View>
        )}
      </View>
      {!!error && (
        <Text style={[styles.errorText, TextStyles.mediumText]}>{error}</Text>
      )}
    </View>
  );
}

export default TextField;
