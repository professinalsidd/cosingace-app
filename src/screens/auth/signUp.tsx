import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import LayoutComp from '../../components/common/Layout';
import InputComp from '../../components/common/input';
import {COLORS, LAYOUT} from '../../themes/theme';
import {Text} from 'react-native-paper';
import ButtonComp from '../../components/common/Button';
import {useNavigation} from '@react-navigation/native';
import DateComp from '../../components/common/date';
import DropdownComp from '../../components/common/dropdown';
import TextComp from '../../components/common/gradientText';
import Icon from 'react-native-vector-icons/AntDesign';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectTime, setSelectTime] = useState(new Date());

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
        <View style={[LAYOUT.flexAlignRowCenter, styles.root]}>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={30}
          />
          <TextComp style={styles.heading} title="Sign Up" type="md" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={[LAYOUT.flexRowAJCenter]}>
            <Text>Already have an account </Text>
            <Text
              onPress={() => navigation.navigate('login' as never)}
              style={styles.link}>
              login
            </Text>
          </View>
        </ScrollView>
      </LayoutComp>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  root: {marginVertical: '1%'},
  layout: {borderRadius: 15},
  img: {width: 120, height: 120, objectFit: 'contain'},
  heading: {textAlign: 'left', marginVertical: '2%', marginHorizontal: '3%'},
  link: {
    color: COLORS.PURPLE,
    textAlign: 'center',
    marginVertical: '5%',
  },
});
