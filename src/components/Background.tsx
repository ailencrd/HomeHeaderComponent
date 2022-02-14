import React from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import styles, {returnDynamicStyles} from '../styles/Background';
import {BackgroundType} from '../types/Background';
import Greetings from './Greetings';
import Title from './Title';

const Background = ({
  heightValue,
  borderValue,
  opacity,
  titlePosition,
  userName,
}: BackgroundType) => {
  const dynamicStyles = useAnimatedStyle(() =>
    returnDynamicStyles(heightValue.value, borderValue.value),
  );

  return (
    <Animated.View style={[styles.background, dynamicStyles]}>
      <Greetings opacity={opacity} userName={userName} />
      <Title title="Estado de tu cuenta" top={titlePosition} />
    </Animated.View>
  );
};

export default Background;
