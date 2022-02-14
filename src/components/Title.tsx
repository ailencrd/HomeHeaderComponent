import React from 'react';
import {Text} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import styles from '../styles/Title';
import {TitleType} from '../types/Greetings copy';

const Title = ({title, top}: TitleType) => {
  const dynamicTop = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value),
    };
  });

  return (
    <Animated.View style={[styles.container, dynamicTop]}>
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
  );
};

export default Title;
