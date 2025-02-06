import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {COLORS} from '../../themes/theme';
import {CardTypes} from '../../types';
import {useNavigation} from '@react-navigation/native';

const CardComp: React.FC<CardTypes> = ({data}) => {
  const navigation = useNavigation();
  return (
    <>
      {data.map((item, index) => (
        <Card
          onPress={() => navigation.navigate(item.key as never)}
          key={index}
          style={styles.card}>
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
    </>
  );
};

export default CardComp;

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
  card: {marginVertical: 5, elevation: 5, shadowColor: COLORS.GREY},
  heading: {padding: 5, fontSize: 16, fontWeight: '700'},
});
