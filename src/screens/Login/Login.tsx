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
import {handleExit} from '../../utils/BackHandlers/ExitHandler';
import {emailRegex, passRegex} from '../../utils/Regex/Regex';
import {getAuth, signInWithEmailAndPassword} from '@react-native-firebase/auth';
import {showSnackbar} from '../../utils/Snackbar/showSnackbar';

interface LoginData {
  email: string;
  password: string;
  emailError?: string;
  passwordError?: string;
  emailTouched?: boolean;
}

function Login(): React.JSX.Element {
  const auth = getAuth();
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
      password: val?.trim(),
    });
  };

  const checkPass = () => {
    const isInvalid = !passRegex.test(formData?.password);
    const newError = isInvalid ? 'Invalid Password' : '';
    if (formData.passwordError !== newError) {
      setFormData({
        ...formData,
        passwordError: newError,
      });
    }
    return !isInvalid;
  };

  const onLogin = async () => {
    if (checkPass()) {
      try {
        let response = await signInWithEmailAndPassword(
          auth,
          formData?.email?.trim(),
          formData?.password?.trim(),
        );
        console.log(response);

        showSnackbar('Login Success', '');
      } catch (e: any) {
        let msg = `${e}`;
        if (msg.includes('auth/invalid-credential')) {
          msg = 'Invalid Credentials';
        } else {
          msg = 'Try after Sometime';
        }
        showSnackbar(msg);
      }
    }
  };

  const isLoginBtnDisabled =
    !formData?.email ||
    !!formData?.emailError ||
    !formData?.password ||
    formData?.password?.length < 6;
  !!formData?.passwordError;

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
              onBlur={() => checkPass()}
              onChange={onChangePassword}
              title="Enter Password"
              value={formData?.password}
            />
          </View>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>
          <View style={styles.loginBtn}>
            <ButtonComponent
              title="Login"
              onPress={onLogin}
              disabled={isLoginBtnDisabled}
            />
          </View>
          <LoginFooter />
        </View>
      </KeyboardAwareScrollView>
    </PublicLayout>
  );
}

export default Login;
