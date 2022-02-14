import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../styles/layout/fonts/PpiIconFont.json';
import {IconType} from '../types/Icon';

const IconComponent = createIconSetFromIcoMoon(
  icoMoonConfig,
  'PpiIconFont',
  'PpiIconFont.ttf',
);

const Icon = ({
  name,
  size = 20,
  onPress,
  containerStyle,
  iconStyle,
}: IconType) => (
  <TouchableOpacity
    disabled={false}
    onPress={onPress}
    activeOpacity={0.8}
    style={[containerStyle]}>
    <View>
      <IconComponent name={name} size={size} color="white" style={iconStyle} />
    </View>
  </TouchableOpacity>
);

export default Icon;
