import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes/theme';

const LayoutComp = ({children}: LayoutType) => {
  return (
    <View style={styles.root}>
      <View style={styles.subRoot}>{children}</View>
    </View>
  );
};

export default LayoutComp;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  subRoot: {
    marginHorizontal: '3%',
  },
});
