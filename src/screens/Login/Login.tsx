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

interface LoginData {
  email: string;
  password: string;
  emailError?: string;
  passwordError?: string;
}

function Login(): React.JSX.Element {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });

  //State Updation
  const onChangeEmail = (val: string) => {
    setFormData({
      ...formData,
      email: val,
    });
  };

  const onChangePassword = (val: string) => {
    setFormData({
      ...formData,
      password: val,
    });
  };

  return (
    <PublicLayout>
      <View style={styles.container}>
        <AppTitle />
        <Text style={[styles.loginText, TextStyles.boldText]}>Login</Text>
        <View style={styles.loginForm}>
          <TextField
            error={formData?.emailError}
            isRequired
            onBlur={e => {}}
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
    </PublicLayout>
  );
}

export default Login;
