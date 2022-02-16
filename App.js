// import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import HomeHeader from './src/components/HomeHeader';

const styles = StyleSheet.create({content: {flex: 1}});

const App = () => (
  // TODO: Tenemos que plantear una estructura de carpetas para este tipo de compos.
  // Creo que estos ya ameritan Atomic Design. Principalmente porque sospecho que
  // muchos van a ser reutilizados. Hay que pensar si pasamos a esa estructura lo demas.

  // TODO: Hace este repo privado o saca toda referencia a PPI por las dudas.

  // TODO: Tenemos que checkear si se puede ocultar el efecto de android
  // cuando llegas a tope del scroll.
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
