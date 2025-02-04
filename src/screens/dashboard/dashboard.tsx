import {StyleSheet, View} from 'react-native';
import React from 'react';
import LayoutComp from '../../components/common/Layout';
import {COLORS, LAYOUT} from '../../themes/theme';
import {Text} from 'react-native-paper';

import CardComp from '../../components/common/cards';

const DashboardScreen = () => {
  return (
    <LayoutComp>
      <View style={[LAYOUT.flexCenter, styles.header]}>
        <Text>Sidd Dashboard</Text>
      </View>
      <CardComp
        headerTitle="HTML Topic"
        label="HTML"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque tenetur praesentium commodi debitis natus voluptatem quasi, cupiditate illum est mollitia cum rem. Dolorum amet facere, officiis unde consequuntur distinctio."
        link="html topic"
      />
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
  },
});
