import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';
import styles from './PasswordValidator.styles';
import {TextStyles} from '../../theme/textstyles';
import {Colors} from '../../theme/color';
import CheckIcon from '../../../assets/icons/CheckIcon';
import {
  stringWithOneLowercase,
  stringWithOneNum,
  stringWithOneSpecialChar,
  stringWithOneUppercase,
} from '../../utils/Regex/Regex';

interface PASS_CHECK_TYPE {
  title: string;
  isFulfilled: boolean;
}

function PasswordValidator({password}: {password: string}) {
  const checksData: Array<PASS_CHECK_TYPE> = [
    {
      title: 'Password should be of 6 to 16 characters long',
      isFulfilled: password.length >= 6 && password.length <= 16,
    },
    {
      title: 'Password must contain 1 Number',
      isFulfilled: stringWithOneNum.test(password),
    },
    {
      title: 'Password must contain 1 Special Character (@!#$&)',
      isFulfilled: stringWithOneSpecialChar.test(password),
    },
    {
      title: 'Password must contain 1 Uppercase Alphabet',
      isFulfilled: stringWithOneUppercase.test(password),
    },
    {
      title: 'Password must contain 1 Lowercase Alphabet',
      isFulfilled: stringWithOneLowercase.test(password),
    },
  ];

  const renderItem = (val: PASS_CHECK_TYPE, index: number) => {
    const {isFulfilled, title} = val;

    return (
      <View style={styles.checkRow} key={index}>
        <View
          style={[
            styles.iconContainer,
            {
              borderColor: isFulfilled ? Colors.WHITE : Colors.LIGHT_GREY,
              backgroundColor: isFulfilled ? Colors.WHITE : Colors.TRANSPARENT,
            },
          ]}>
          {isFulfilled && <CheckIcon height={16} width={16} />}
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.rowText,
              TextStyles.mediumText,
              {color: isFulfilled ? Colors.WHITE : Colors.LIGHT_GREY},
            ]}>
            {title}
          </Text>
        </View>
      </View>
    );
  };

  return <View style={styles.container}>{checksData.map(renderItem)}</View>;
}

export default PasswordValidator;
