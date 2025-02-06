/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import LayoutComp from '../../components/common/Layout';
import {COLORS} from '../../themes/theme';
import Swiper from 'react-native-swiper';
import {Text} from 'react-native-paper';
import {dashboardList, swiperData} from '../../constant';
import CardComp from '../../components/common/cards';
import HeaderComp from '../../components/common/header';

const DashboardScreen = () => {
  return (
    <LayoutComp>
      <HeaderComp title="Dashboard" />
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardComp data={dashboardList} />
      </ScrollView>
    </LayoutComp>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
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
});
