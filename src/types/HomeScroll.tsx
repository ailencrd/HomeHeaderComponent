import {SharedValue} from 'react-native-reanimated';

export type HomeScrollType = {
  dynamicTop: SharedValue<number>;
  onScroll: (ev: number) => void;
};
