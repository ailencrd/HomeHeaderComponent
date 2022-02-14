import {SharedValue} from 'react-native-reanimated';

export type BackgroundType = {
  heightValue: SharedValue<number>;
  borderValue: SharedValue<number>;
  opacity: SharedValue<number>;
  titlePosition: SharedValue<number>;
  userName: string;
};
