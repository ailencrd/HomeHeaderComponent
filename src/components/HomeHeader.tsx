import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {
  defaultBgBorderRadius,
  defaultBgHeight,
  defaultScrollTop,
  defaultTitleTop,
  HEADER_HEIGHT,
} from '../styles/layout/constants';
import {HomeHeaderType} from '../types/HomeHeader';
import Background from './Background';
import HomeScroll from './HomeScroll';
import Widgets from './Widgets';

const HomeHeader = ({userName}: HomeHeaderType) => {
  const dynamicBorder = useSharedValue(defaultBgBorderRadius);
  const dynamicHeight = useSharedValue(defaultBgHeight);
  const dynamicOpacity = useSharedValue(1);
  const dynamicScrollTop = useSharedValue(defaultScrollTop);
  const dynamicTitleTop = useSharedValue(defaultTitleTop);

  const handleScroll = (y: number) => {
    if (y < 30) {
      dynamicHeight.value = defaultBgHeight;
      dynamicScrollTop.value = defaultScrollTop;
      dynamicBorder.value = defaultBgBorderRadius;
      dynamicOpacity.value = 1;
      dynamicTitleTop.value = defaultTitleTop;
    } else {
      dynamicHeight.value = HEADER_HEIGHT;
      dynamicScrollTop.value = HEADER_HEIGHT;
      dynamicBorder.value = 0;
      dynamicOpacity.value = 0;
      dynamicTitleTop.value =
        Platform.OS === 'ios' ? 65 : StatusBar.currentHeight;
    }
  };
  return (
    <View>
      <Background
        userName={userName}
        heightValue={dynamicHeight}
        borderValue={dynamicBorder}
        opacity={dynamicOpacity}
        titlePosition={dynamicTitleTop}
      />
      <Widgets />
      <HomeScroll
        dynamicTop={dynamicScrollTop}
        onScroll={(e: number) => handleScroll(e)}
      />
    </View>
  );
};

export default HomeHeader;
