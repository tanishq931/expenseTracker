import React from 'react';
import 'react-native-gesture-handler';
import Navigator from './utils/Navigator/Navigator';
import {StatusBar} from 'react-native';
import {Colors} from './theme/color';
import {SafeAreaView} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.NAVY_BLUE} />
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.NAVY_BLUE}}>
        <Navigator></Navigator>
      </SafeAreaView>
    </>
  );
}

export default App;
