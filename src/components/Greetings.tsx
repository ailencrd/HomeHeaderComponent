import React from 'react';
import {Text} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import styles, {returnDynamicStyles} from '../styles/Greetings';
import {GreetingsType} from '../types/Greetings';
import Icon from './Icon';

const Greetings = ({opacity, userName = 'Usuario'}: GreetingsType) => {
  const dynamicOpacity = useAnimatedStyle(() =>
    returnDynamicStyles(opacity.value),
  );

  return (
    <Animated.View style={[styles.container, dynamicOpacity]}>
      <Icon
        name="ppi-isotipo-gris"
        size={30}
        containerStyle={styles.image}
        onPress={() => {}}
      />
      <Text style={styles.text}>Buenas tardes, {userName}</Text>
    </Animated.View>
  );
};

export default Greetings;
