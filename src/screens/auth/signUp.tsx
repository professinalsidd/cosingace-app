import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LayoutComp from '../../components/common/Layout';
import InputComp from '../../components/common/input';
import {COLORS, LAYOUT} from '../../themes/theme';
import {Text} from 'react-native-paper';
import ButtonComp from '../../components/common/Button';
import {useNavigation} from '@react-navigation/native';
import DateComp from '../../components/common/date';
import DropdownComp from '../../components/common/dropdown';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectTime, setSelectTime] = useState(new Date());
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
        <Text variant="headlineMedium">Sign Up</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <InputComp
          label="Full Name"
          value={text}
          onChange={(t: string) => setText(t)}
          placeholder="Enter your fullName"
        />
        <InputComp
          label="Email Address"
          value={text}
          onChange={(t: string) => setText(t)}
          placeholder="Enter your email address"
        />
        <InputComp
          label="Phone Number"
          value={text}
          onChange={(t: string) => setText(t)}
          placeholder="Enter your phoneNumber"
        />
        <View>
          <DateComp
            mode="date"
            date={selectedDate}
            setDate={setSelectedDate}
            label="Pick a Date"
            title="Selected Date of Birth:- "
          />
        </View>
        <View>
          <DateComp
            mode="time"
            date={selectTime}
            setDate={setSelectTime}
            label="Pick a class time"
            title="Selected Class Time:- "
          />
        </View>
        <View>
          <DropdownComp />
        </View>
        <InputComp
          label="New Password"
          value={text}
          secureTextEntry
          onChange={(t: string) => setText(t)}
          placeholder="Enter your new password"
        />
        <InputComp
          label="Confirm Password"
          value={text}
          secureTextEntry
          onChange={(t: string) => setText(t)}
          placeholder="Enter your confirm password"
        />
        <View>
          <DropdownComp />
        </View>
        <InputComp
          label="Address"
          value={text}
          secureTextEntry
          onChange={(t: string) => setText(t)}
          placeholder="Enter your address"
        />
        <ButtonComp title={'Sign up'} />
        <View style={[LAYOUT.flexRowAJCenter, styles.linkCtn]}>
          <Text>Already have an account </Text>
          <Text
            onPress={() => navigation.navigate('login' as never)}
            style={styles.link}>
            login
          </Text>
        </View>
      </ScrollView>
    </LayoutComp>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {marginVertical: '2%'},
  img: {width: 120, height: 120, objectFit: 'contain'},
  content: {
    //flex: 1,
  },
  linkCtn: {
    // flex: 1,
  },
  link: {
    color: COLORS.PURPLE,
    textAlign: 'center',
  },
});
