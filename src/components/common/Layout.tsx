import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes/theme';
import LinearGradient from 'react-native-linear-gradient';
import {LayoutType} from '../../types';

const LayoutComp = ({children, style}: LayoutType) => {
  return (
    <LinearGradient
      colors={['#76C889', '#DBFFE4']}
      style={[styles.root, style]}>
      <View style={styles.subRoot}>{children}</View>
    </LinearGradient>
  );
};

export default LayoutComp;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  subRoot: {
    flex: 1,
    marginHorizontal: '3%',
  },
});
