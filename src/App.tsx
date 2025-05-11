import React from 'react';
import 'react-native-gesture-handler';
import Navigator from './utils/Navigator/Navigator';
import {Platform, StatusBar} from 'react-native';
import {Colors} from './theme/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from './redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BACKGROUND} />
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.BACKGROUND}}>
        <Navigator></Navigator>
      </SafeAreaView>
      <Toast position="top" topOffset={Platform.OS === 'ios' ? 60 : 20} />
    </Provider>
  );
}

export default App;
