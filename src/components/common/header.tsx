import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, LAYOUT} from '../../themes/theme';
import TextComp from './gradientText';
import {headerType} from '../../types';

const HeaderComp = ({title}: headerType) => {
  return (
    <View style={[LAYOUT.flexRowBetween, styles.header]}>
      <Image
        source={require('../../assets/images/logo-sign.png')}
        style={styles.img}
      />
      <TextComp title={title} type="md" />
      <View style={[LAYOUT.flexCenter, styles.content]}>
        <TextComp title="S" type="md" />
      </View>
    </View>
  );
};

export default HeaderComp;

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
});
