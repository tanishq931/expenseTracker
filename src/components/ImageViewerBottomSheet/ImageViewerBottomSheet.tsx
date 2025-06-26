import React from 'react';
import styles from './ImageViewerBottomSheet.styles';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Image, TouchableOpacity, View} from 'react-native';
import CrossIcon from '../../../assets/icons/CrossIcon';
import {Colors} from '../../theme/color';
import useBottomSheet from '../../utils/BottomSheet/useBottomSheet';

function ImageViewerBottomSheet() {
  const imgUrl = useSelector((state: RootState) => {
    return state.utilsSlice.imageViewUrl;
  });
  const {closeSheet} = useBottomSheet();

  return (
    <BottomSheetView style={styles.outerContainer}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imgUrl}} />
        <TouchableOpacity style={styles.crossbtn} onPress={() => closeSheet()}>
          <CrossIcon stroke={Colors.RED} />
        </TouchableOpacity>
      </View>
    </BottomSheetView>
  );
}

export default ImageViewerBottomSheet;
