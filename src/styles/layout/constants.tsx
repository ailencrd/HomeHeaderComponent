import {Dimensions, Platform, StatusBar} from 'react-native';

export const HEADER_HEIGHT =
  Platform.OS === 'ios' ? 120 : 72 + StatusBar.currentHeight;

export const DEVICE_WIDTH = Dimensions.get('window').width;

export const defaultBgHeight = HEADER_HEIGHT + 100;
export const defaultBgBorderRadius = DEVICE_WIDTH / 10;
export const defaultScrollTop = HEADER_HEIGHT + 20;
export const defaultTitleTop =
  Platform.OS === 'ios' ? 115 : 45 + StatusBar.currentHeight;
