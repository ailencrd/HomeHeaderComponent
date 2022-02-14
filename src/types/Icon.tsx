import {NativeSyntheticEvent, NativeTouchEvent, StyleProp} from 'react-native';

export type IconType = {
  containerStyle?: StyleProp<any>;
  iconStyle?: StyleProp<any>;
  name: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  size?: number;
};
