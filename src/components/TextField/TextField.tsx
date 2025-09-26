import React, {ReactNode} from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './TextField.styles';
import {TextStyles} from '../../theme/textstyles';
import {KEYBOARD_TYPE} from '../../constants/constants';

function TextField({
  editable = true,
  error,
  hideText = false,
  isRequired = false,
  keyboardType = KEYBOARD_TYPE.DEFAULT,
  onBlur = () => {},
  onChange,
  placeholderText,
  prefix,
  suffix,
  title = '',
  value,
  maxLength = 10,
}: {
  editable?: boolean;
  error?: string;
  hideText?: boolean;
  isRequired?: boolean;
  keyboardType?: string;
  maxLength?: number;
  onBlur?: (e: any) => void;
  onChange: (val: string) => void;
  placeholderText?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  title?: string;
  value: string;
}): React.JSX.Element {
  const isSuffix = !!suffix;
  const isPrefix = !!prefix;

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
        {isPrefix && (
          <View style={[styles.prefixContainer, {opacity: editable ? 1 : 0.5}]}>
            {prefix}
          </View>
        )}
        <TextInput
          autoCapitalize='none'
          editable={editable}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholderText}
          secureTextEntry={hideText}
          style={[
            styles.inputStyles,
            isSuffix ? styles.inputWithSuffix : {},
            isPrefix ? styles.inputWithPrefix : {},
            {opacity: editable ? 1 : 0.5},
          ]}
          value={value}
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
