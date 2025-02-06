/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import LayoutComp from '../../components/common/Layout';
import {COLORS, LAYOUT} from '../../themes/theme';
import TextComp from '../../components/common/gradientText';
import Swiper from 'react-native-swiper';
import {Card, Text} from 'react-native-paper';
import {dashboardList, swiperData} from '../../constant';

const DashboardScreen = () => {
  return (
    <LayoutComp>
      <View style={[LAYOUT.flexRowBetween, styles.header]}>
        <Image
          source={require('../../assets/images/logo-sign.png')}
          style={styles.img}
        />
        <TextComp title="Dashboard" type="md" />
        <View style={[LAYOUT.flexCenter, styles.content]}>
          <TextComp title="S" type="md" />
        </View>
      </View>
      <View style={{height: 150}}>
        <Swiper
          activeDotColor={COLORS.GREEN}
          dotColor={COLORS.LIGHT_GREEN}
          autoplayTimeout={5}
          showsPagination
          autoplay>
          {swiperData.map((item, index) => (
            <View key={index} style={styles.swiperRt}>
              <View style={styles.subCtn}>
                <Image alt="banner" style={styles.banner} source={item.img} />
                <View style={styles.textCtn}>
                  <Text style={styles.text}>{item.content}</Text>
                </View>
              </View>
            </View>
          ))}
        </Swiper>
      </View>
      <ScrollView style={{}}>
        {dashboardList.map((item, index) => (
          <Card key={index} style={styles.card}>
            <View style={styles.swiperRt}>
              <View style={styles.subCtn}>
                <Image alt="banner" style={styles.banner} source={item.img} />
                <View style={styles.textCtn}>
                  <Text style={styles.heading}>{item.heading}</Text>
                  <Text style={styles.text}>{item.content}</Text>
                </View>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </LayoutComp>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.WHITE,
    elevation: 2,
    borderRadius: 5,
    height: 50,
    marginVertical: '2%',
    paddingHorizontal: '5%',
  },
  content: {
    width: 35,
    height: 35,
    backgroundColor: COLORS.LIGHT_GREEN,
    borderRadius: 99,
  },
  img: {width: 35, height: 35, objectFit: 'contain'},
  swiperRt: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    borderWidth: 0,
    shadowColor: '#ccc',
    marginHorizontal: 2,
  },
  subCtn: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  banner: {width: 80, height: 80, objectFit: 'cover'},
  textCtn: {flex: 1, marginHorizontal: 5},
  text: {flexShrink: 1, fontSize: 12, padding: 5, fontWeight: '600'},
  card: {marginVertical: 5, elevation: 5, shadowColor: COLORS.GREY},
  heading: {padding: 5, fontSize: 16, fontWeight: '700'},
});
