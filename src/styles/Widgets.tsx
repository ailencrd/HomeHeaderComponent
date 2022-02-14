import {Platform, StatusBar, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 65 : 5 + StatusBar.currentHeight,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    marginHorizontal: 10,
  },
});

export default styles;
