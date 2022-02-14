import {StyleSheet} from 'react-native';
import {withTiming} from 'react-native-reanimated';

export const returnDynamicStyles = (height, border) => {
  'worklet';
  const borderValue = border;
  return {
    height: withTiming(height),
    borderBottomLeftRadius: withTiming(borderValue),
    borderBottomRightRadius: withTiming(borderValue),
    borderBottomEndRadius: withTiming(borderValue),
    borderBottomStartRadius: withTiming(borderValue),
  };
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#034EEF',
  },
});

export default styles;
