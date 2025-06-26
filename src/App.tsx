import React from 'react';
import 'react-native-gesture-handler';
import Navigator from './utils/Navigator/Navigator';
import {Platform} from 'react-native';
import {Colors} from './theme/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {KeyboardProvider} from 'react-native-keyboard-controller';

function App(): React.JSX.Element {

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
