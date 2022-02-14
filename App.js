// import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import HomeHeader from './src/components/HomeHeader';

const styles = StyleSheet.create({content: {flex: 1}});

const App = () => (
  <View style={styles.content}>
    <StatusBar
      backgroundColor="#034EEF"
      barStyle="light-content"
      animated={true}
    />
    <HomeHeader userName="Terricola" />
  </View>
);

export default App;
