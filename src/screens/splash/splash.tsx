import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.root}>
      <Image
        source={require('../../assets/images/logo.png')}
        alt="Logo"
        style={styles.img}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img: {width: 150, height: 150, objectFit: 'contain'},
});
