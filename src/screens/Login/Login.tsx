import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './Login.styles';
import PublicLayout from '../../layouts/PublicLayout';
import {TextStyles} from '../../theme/textstyles';
import TextField from '../../components/TextField/TextField';
import {KEYBOARD_TYPE} from '../../constants/constants';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import LoginFooter from '../../components/LoginFooter/LoginFooter';
import AppTitle from '../../components/AppTitle/AppTitle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';
import {handleExit} from '../../utils/ExitHandler/ExitHandler';
import {emailRegex} from '../../utils/Regex/Regex';

interface LoginData {
  email: string;
  password: string;
  emailError?: string;
  passwordError?: string;
  emailTouched?: boolean;
}

function Login(): React.JSX.Element {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });

  //State Updation
  const onChangeEmail = (val: string) => {
    let error = checkEmail(val, true);
    setFormData({
      ...formData,
      email: val,
      emailError: formData?.emailTouched ? error : '',
    });
  };
  function checkEmail(val: string, isCheckOnly?: boolean) {
    let error = '';
    if (!emailRegex.test(val.trim()) && !!val) {
      error = 'Invalid email';
    }
    if (isCheckOnly) {
      return error;
    }
    setFormData({
      ...formData,
      emailError: error,
      emailTouched: true,
    });
  }

  const onChangePassword = (val: string) => {
    setFormData({
      ...formData,
      password: val,
    });
  };

  handleExit();

  return (
    <PublicLayout>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        bottomOffset={40}>
        <View style={styles.container}>
          <AppTitle />
          <Text style={[styles.loginText, TextStyles.boldText]}>Login</Text>
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
              error={formData?.passwordError}
              onBlur={() => {}}
              onChange={onChangePassword}
              title="Enter Password"
              value={formData?.password}
            />
          </View>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>
          <View style={styles.loginBtn}>
            <ButtonComponent title="Login" onPress={() => {}} />
          </View>
          <LoginFooter />
        </View>
      </KeyboardAwareScrollView>
    </PublicLayout>
  );
}

export default Login;
