import React, {useRef, useState} from 'react';
import AppTitle from '../../components/AppTitle/AppTitle';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import TextField from '../../components/TextField/TextField';
import styles from './SignUp.styles';
import {TextStyles} from '../../theme/textstyles';
import {KEYBOARD_TYPE} from '../../constants/constants';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import LoginFooter from '../../components/LoginFooter/LoginFooter';
import {emailRegex, passRegex} from '../../utils/Regex/Regex';
import PasswordValidator from '../../components/PasswordValidator/PasswordValidator';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';
import PublicLayout from '../../layouts/PublicLayout';
import BackArrowIcon from '../../../assets/icons/BackArrow';
import {useNavigation} from '@react-navigation/native';
import {
  createUserWithEmailAndPassword,
  getAuth,
} from '@react-native-firebase/auth';
import {showSnackbar} from '../../utils/Snackbar/showSnackbar';
import {SCREENS} from '../../constants/screenNames';

interface LoginData {
  email: string;
  emailError?: string;
  emailTouched?: boolean;
  password: string;
  passwordError?: string;
  confirmPassword: string;
  confirmPassError?: string;
  confirmPasstouched?: boolean;
}

function SignUp() {
  const auth = getAuth();
  const navigate = useNavigation();

  const [formData, setFormData] = useState<LoginData>({
    email: '',
    emailTouched: false,
    password: '',
    confirmPassword: '',
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
    let error = '';
    if (val.trimStart().includes(' ')) {
      error = 'Password cannot contain spaces';
    }
    setFormData({
      ...formData,
      password: val?.trim(),
      passwordError: error,
    });
  };

  const onChangeConfirmPass = (val: string) => {
    let error = checkConfirmPass(val, true);
    setFormData({
      ...formData,
      confirmPassword: val?.trim(),
      confirmPassError: formData?.confirmPasstouched ? error : '',
    });
  };

  function checkConfirmPass(val: string, isCheckOnly?: boolean) {
    let error = '';
    if (formData?.password !== val && !!formData?.confirmPassword) {
      error = 'Passwords do not match';
    }
    if (isCheckOnly) {
      return error;
    }
    setFormData({
      ...formData,
      confirmPassError: error,
      confirmPasstouched: true,
    });
  }

  const onSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData?.email?.trim(),
        formData?.password?.trim(),
      );
      showSnackbar('SignUp Success, Please Login', '');
    } catch (e: any) {
      let msg = `${e}`;
      if (msg.includes('auth/email-already-in-use')) {
        console.log('in if ');
        msg = 'User already exists';
        showSnackbar(msg, 'Login', () => navigate.navigate(SCREENS.LOGIN));
      } else {
        console.log('in else');

        msg = 'Try after Sometime';
        showSnackbar(msg,'');
      }
    }
  };

  const isSignUpDisabled =
    !formData?.email ||
    !!formData?.emailError ||
    !formData?.password ||
    !!formData?.passwordError ||
    !formData?.confirmPassword ||
    formData?.password !== formData?.confirmPassword;

  const isPasswordValid = passRegex.test(formData?.password);

  return (
    <PublicLayout>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        bottomOffset={40}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => {
              navigate.goBack();
            }}>
            <BackArrowIcon height={40} width={40} />
          </TouchableOpacity>
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
              error={formData?.passwordError}
            />
            <PasswordValidator password={formData?.password} />
            <PasswordInput
              editable={isPasswordValid}
              error={formData?.confirmPassError}
              onBlur={() => checkConfirmPass(formData?.confirmPassword)}
              onChange={onChangeConfirmPass}
              title="Confirm Password"
              value={formData?.confirmPassword}
            />
          </View>
          <View style={styles.loginBtn}>
            <ButtonComponent
              title="Register"
              onPress={onSignUp}
              disabled={isSignUpDisabled}
            />
          </View>
          <LoginFooter isFromLogin={false} />
        </View>
      </KeyboardAwareScrollView>
    </PublicLayout>
  );
}

export default SignUp;
