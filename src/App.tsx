import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import Navigator from './utils/Navigator/Navigator';
import {Platform, View} from 'react-native';
import {Colors} from './theme/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from './redux/store';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import CustomBottomSheet from './components/BottomSheet/BottomSheet';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {getTransactions} from './redux/TransactionSlice';

function App(): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const BottomSheetData = useSelector((state: RootState) => state.utilsSlice);
  const {bottomSheetVisible, bottomSheetType} = BottomSheetData;

  useEffect(() => {
    dispatch(getTransactions());
    changeNavigationBarColor(Colors.BACKGROUND);
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
      <View style={{position: 'absolute', height: '100%', width: '100%'}}>
        <CustomBottomSheet
          isVisible={bottomSheetVisible}
          type={bottomSheetType}
        />
      </View>
    </>
  );
}

export default App;
