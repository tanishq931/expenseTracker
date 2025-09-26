import React, {useEffect, useRef, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import CatergoryBottomSheet from '../CategoryBottomSheet/CatergoryBottomSheet';
import useBottomSheet from '../../utils/BottomSheet/useBottomSheet';
import styles from './BottomSheet.styles';
import ImagePickerBottomSheet from '../ImagePickerBottomSheet/ImagePickerBottomSheet';
import ImageViewerBottomSheet from '../ImageViewerBottomSheet/ImageViewerBottomSheet';

const CustomBottomSheet = ({
  isVisible,
  type,
}: {
  isVisible: boolean;
  type: string;
}) => {
  const sheetRef = useRef<BottomSheet>(null);
  const {closeSheet} = useBottomSheet();
  const [sheetVisible, setSheetVisible] = useState(isVisible);

  useEffect(() => {
    if (sheetVisible && !isVisible) {
      sheetRef?.current?.close();
      setTimeout(() => setSheetVisible(false), 500);
    } else {
      setSheetVisible(isVisible);
    }
  }, [isVisible]);

  const data: any = {
    CATEGORY_LIST: CatergoryBottomSheet,
    IMAGE_PICKER: ImagePickerBottomSheet,
    IMAGE_VIEWER: ImageViewerBottomSheet, // Assuming ImageViewer uses the same component
  };

  const SheetChild = data[type];

  return (
    <>
      {sheetVisible && (
        <GestureHandlerRootView
          style={[
            styles.container,
            {backgroundColor: isVisible ? 'rgba(0,0,0,0.5)' : 'transparent'},
          ]}>
          <BottomSheet
            ref={sheetRef}
            maxDynamicContentSize={700}
            enablePanDownToClose={true}
            enableDynamicSizing={true}
            animateOnMount={true}
            handleStyle={styles.handleContainer}
            backgroundStyle={styles.background}
            handleIndicatorStyle={styles.handler}
            onChange={index => {
              if (index == -1) {
                closeSheet();
              }
            }}>
            <>{isVisible && <SheetChild />}</>
          </BottomSheet>
        </GestureHandlerRootView>
      )}
    </>
  );
};

export default CustomBottomSheet;
