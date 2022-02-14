import React from 'react';
import {View} from 'react-native';
import styles from '../styles/Widgets';
import Icon from './Icon';

const Widgets = () => (
  <View style={styles.container}>
    <Icon
      name="notification-empty"
      containerStyle={styles.image}
      onPress={() => console.log('Hola desde notificaciones')}
    />
    <Icon
      name="search"
      containerStyle={styles.image}
      onPress={() => console.log('Hola desde search')}
    />
  </View>
);

export default Widgets;
