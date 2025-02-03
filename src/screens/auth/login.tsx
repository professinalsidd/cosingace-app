import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LayoutComp from '../../components/common/Layout';
import InputComp from '../../components/common/input';
import {COLORS, LAYOUT} from '../../themes/theme';
import {Text} from 'react-native-paper';
import ButtonComp from '../../components/common/Button';

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
      <View style={styles.content}>
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
        <ButtonComp title={'Login'} />
      </View>
      <View style={[LAYOUT.flexRowAJCenter, styles.linkCtn]}>
        <Text>Don’t you have an account </Text>
        <Text style={styles.link}>Signup</Text>
      </View>
    </LayoutComp>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {marginVertical: '2%'},
  img: {width: 120, height: 120, objectFit: 'contain'},
  content: {
    flex: 1,
  },
  linkCtn: {
    flex: 1,
  },
  link: {
    color: COLORS.PURPLE,
    textAlign: 'center',
  },
});
