import React, {useRef} from 'react';
import {View, Image} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import styles, {returnDynamicStyles} from '../styles/HomeScroll';
import kittiesList from '../images/kittiesList';
import {HomeScrollType} from '../types/HomeScroll';

const ScrollExample = ({onScroll, dynamicTop}: HomeScrollType) => {
  const content = useRef(null);
  const scrollAnimatedStyles = useAnimatedStyle(() =>
    returnDynamicStyles(dynamicTop.value),
  );

  return (
    <Animated.ScrollView
      ref={content}
      onScroll={e => {
        const {y} = e.nativeEvent.contentOffset;
        onScroll(y);
      }}
      scrollEventThrottle={16}
      style={scrollAnimatedStyles}
      bounces={false}>
      {kittiesList.map(e => (
        <View key={e.id} style={styles.scrollView}>
          <Image source={e.uri} style={styles.image} />
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default ScrollExample;
