import React, {useState} from 'react';
import BaseLayout from '../../layouts/BaseLayout';
import AppTitle from '../../components/AppTitle/AppTitle';
import {View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import TextField from '../../components/TextField/TextField';
import styles from './SignUp.styles';
import {TextStyles} from '../../theme/textstyles';
import {KEYBOARD_TYPE} from '../../constants/constants';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import LoginFooter from '../../components/LoginFooter/LoginFooter';
import {emailRegex} from '../../utils/Regex/Regex';
import PasswordValidator from '../../components/PasswordValidator/PasswordValidator';

interface LoginData {
  email: string;
  emailError?: string;
  emailTouched?: boolean;
  password: string;
  passwordError?: string;
  confirmPassword: string;
  confirmPasswordError?: string;
}

function SignUp() {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  //State Updation
  const onChangeEmail = (val: string) => {
    let error;
    if (formData?.emailTouched) {
      error = checkEmail(val, true);
    }
    setFormData({
      ...formData,
      email: val,
      emailError: error,
    });
  };

  const onChangePassword = (val: string) => {
    setFormData({
      ...formData,
      password: val,
    });
  };

  const onChangeConfirmPass = (val: string) => {
    setFormData({
      ...formData,
      confirmPassword: val,
    });
  };

  const checkEmail = (val: string, checkOnly?: boolean) => {
    let error = '';
    if (!emailRegex.test(val.trim()) && !!val) {
      error = 'Invalid email';
    } else {
      error = '';
    }
    if (checkOnly) return error;
    setFormData({
      ...formData,
      emailTouched: true,
      emailError: error,
    });
  };

  const isSignUpDisabled =
    !formData?.email ||
    !!formData?.emailError ||
    !formData?.password ||
    !!formData?.passwordError ||
    !formData?.confirmPassword ||
    formData?.password !== formData?.confirmPassword;

  return (
    <BaseLayout>
      <View style={styles.container}>
        <AppTitle />
        <Text style={[styles.loginText, TextStyles.boldText]}>Register</Text>
        <View style={styles.loginForm}>
          <TextField
            error={formData?.emailError}
            isRequired
            onBlur={() => checkEmail(formData?.email)}
            onChange={onChangeEmail}
            keyboardType={KEYBOARD_TYPE.EMAIL}
            title="Enter email"
            value={formData?.email}
          />
          <PasswordInput
            onBlur={() => {}}
            onChange={onChangePassword}
            title="Enter Password"
            value={formData?.password}
          />
          <PasswordValidator password={formData?.password} />
          <PasswordInput
            error={formData?.passwordError}
            onBlur={() => {}}
            onChange={onChangeConfirmPass}
            title="Confirm Password"
            value={formData?.confirmPassword}
          />
        </View>
        <View style={styles.loginBtn}>
          <ButtonComponent
            title="Register"
            onPress={() => {}}
            disabled={isSignUpDisabled}
          />
        </View>
        <LoginFooter isFromLogin={false} />
      </View>
    </BaseLayout>
  );
}

export default SignUp;
