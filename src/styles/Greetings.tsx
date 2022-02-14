import {StyleSheet, Platform, StatusBar} from 'react-native';
import {withTiming} from 'react-native-reanimated';

export const returnDynamicStyles = opacity => {
  'worklet';
  return {
    opacity: withTiming(opacity),
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    top: Platform.OS === 'ios' ? 60 : StatusBar.currentHeight,
    left: 20,
  },
  text: {
    fontFamily: 'Quicksand-SemiBold',
    paddingTop: 5,
    fontSize: 14,
    color: 'white',
  },
  image: {
    zIndex: 999,
    marginEnd: 15,
    minHeight: 22,
  },
});

export default styles;
