import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import LayoutComp from '../../components/common/Layout';
import {LAYOUT} from '../../themes/theme';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login' as never);
    }, 1000);
  }, [navigation]);
  return (
    <LayoutComp>
      <View style={[styles.root, LAYOUT.flexCCenter]}>
        <Image
          source={require('../../assets/images/logo.png')}
          alt="Logo"
          style={styles.img}
        />
      </View>
    </LayoutComp>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  img: {width: '50%', height: '50%', objectFit: 'contain'},
});
