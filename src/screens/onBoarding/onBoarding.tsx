import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import LayoutComp from '../../components/common/Layout';
import Swiper from 'react-native-swiper';
import TextComp from '../../components/common/gradientText';
import {onBoarding} from '../../constant';
import {COLORS, LAYOUT} from '../../themes/theme';
import ButtonComp from '../../components/common/Button';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <LayoutComp>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotColor={COLORS.LIGHT_GREEN}
        activeDotColor={COLORS.GREEN}>
        {onBoarding.map((item, idx) => (
          <View key={idx} style={[styles.slide1, LAYOUT.AlignCenter]}>
            <Image source={item.img} alt="on-1" style={styles.img} />
            <TextComp style={styles.gd} type="gd" title={item.heading} />
            <TextComp style={styles.label} type="sm" title={item.label} />
            <TextComp style={styles.tiny} type="tiny" title={item.des} />
            {idx === 4 && (
              <View style={styles.btn}>
                <ButtonComp
                  title="Let's Begin"
                  onPress={() => navigation.navigate('login' as never)}
                />
              </View>
            )}
          </View>
        ))}
      </Swiper>
    </LayoutComp>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    height: '70%',
  },
  img: {width: '70%', height: '70%', objectFit: 'contain'},
  gd: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginVertical: '2%',
  },
  label: {
    marginVertical: '2%',
    fontSize: 16,
    fontWeight: '700',
  },
  tiny: {
    marginVertical: '2%',
    marginHorizontal: '5%',
    fontSize: 14,
    fontWeight: '600',
  },
  btn: {width: '30%'},
});
