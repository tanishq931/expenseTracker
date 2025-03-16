import React from 'react';
import 'react-native-gesture-handler';
import Navigator from './utils/Navigator';
import {StatusBar} from 'react-native';
import {Colors} from './theme/color';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.NAVY_BLUE} />
      <Navigator></Navigator>
    </>
  );
}

export default App;
