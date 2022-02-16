import {StyleSheet} from 'react-native';
import {withTiming} from 'react-native-reanimated';

export const returnDynamicStyles = top => {
  'worklet';
  return {
    top: withTiming(top),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {height: 400, margin: 20},
  image: {flex: 1, height: null, width: null, borderRadius: 10},
  // TODO: Estos null son estrictamente necesarios para alguna animacion me imagino no?
});

export default styles;
