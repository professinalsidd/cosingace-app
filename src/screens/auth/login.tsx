import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import LayoutComp from '../../components/common/Layout';
import InputComp from '../../components/common/input';
import {COLORS, LAYOUT} from '../../themes/theme';
import {Text} from 'react-native-paper';
import ButtonComp from '../../components/common/Button';
import {useNavigation} from '@react-navigation/native';
import TextComp from '../../components/common/gradientText';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <View style={[LAYOUT.AlignCenter]}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.img}
        />
      </View>
      <LayoutComp style={styles.layout}>
        <View style={[LAYOUT.flexRowBetween, styles.root]}>
          <TextComp style={styles.heading} title="Login" type="md" />
          <Pressable
            onPress={() => navigation.navigate('bottomRoute' as never)}>
            <TextComp style={styles.skip} title="Skip" type="md" />
          </Pressable>
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
          <ButtonComp
            title={'Login'}
            onPress={() => navigation.navigate('bottomRoute' as never)}
          />
        </View>
        <View style={[LAYOUT.flexRowAJCenter, styles.linkCtn]}>
          <Text>Don’t you have an account </Text>
          <Text
            onPress={() => navigation.navigate('sign-up' as never)}
            style={styles.link}>
            Signup
          </Text>
        </View>
      </LayoutComp>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {marginVertical: '5%'},
  container: {flex: 1},
  layout: {borderRadius: 15},
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
  heading: {textAlign: 'left'},
  skip: {
    color: COLORS.BLUE,
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: '900',
  },
});
