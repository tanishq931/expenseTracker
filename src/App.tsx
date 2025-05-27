import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import Navigator from './utils/Navigator/Navigator';
import {Platform} from 'react-native';
import {Colors} from './theme/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {AppDispatch} from './redux/store';
import {fetchAuthToken} from './redux/UserActions';
import {KeyboardProvider} from 'react-native-keyboard-controller';

function App(): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthToken());
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.BACKGROUND}}>
        <KeyboardProvider
          navigationBarTranslucent={true}
          statusBarTranslucent={true}
          preserveEdgeToEdge={true}>
          <Navigator></Navigator>
        </KeyboardProvider>
      </SafeAreaView>
      <Toast position="top" topOffset={Platform.OS === 'ios' ? 60 : 20} />
    </>
  );
}

export default App;
