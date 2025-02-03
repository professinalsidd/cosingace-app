import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LayoutComp from '../../components/common/Layout';
import InputComp from '../../components/common/input';
import {LAYOUT} from '../../themes/theme';
import {Text} from 'react-native-paper';

const LoginScreen = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, [showSplashScreen]);

  return (
    <LayoutComp>
      <View style={[LAYOUT.AlignCenter, styles.root]}>
        <Image
          alt="logo"
          style={styles.img}
          source={require('../../assets/images/logo.png')}
        />
        <Text variant="headlineMedium">Login</Text>
      </View>
      <InputComp
        label="Email Address"
        value={text}
        onChange={(t: string) => setText(t)}
        placeholder="Enter your email address"
      />
      <InputComp
        label="Enter Password"
        value={text}
        secureTextEntry
        onChange={(t: string) => setText(t)}
        placeholder="Enter your password"
      />
    </LayoutComp>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {marginVertical: '2%'},
  img: {width: 160, height: 150, objectFit: 'contain'},
});
