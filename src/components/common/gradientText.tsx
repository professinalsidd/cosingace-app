/* eslint-disable react-native/no-inline-styles */
import {StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {Text} from 'react-native-paper';
import {COLORS} from '../../themes/theme';
import {TextTypes} from '../../types';

const TextComp = ({style, type, title}: TextTypes) => {
  return type === 'gd' ? (
    <MaskedView maskElement={<Text style={style}>{title}</Text>}>
      <LinearGradient
        colors={['#09170D', '#BD1717']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={[style, {opacity: 0, textAlign: 'center'}]}>{title}</Text>
      </LinearGradient>
    </MaskedView>
  ) : type === 'lg' ? (
    <Text style={[styles.lg, style]}>{title}</Text>
  ) : type === 'md' ? (
    <Text style={[styles.md, style]}>{title}</Text>
  ) : type === 'sm' ? (
    <Text style={[styles.sm, style]}>{title}</Text>
  ) : (
    <Text style={[styles.tiny, style]}>{title}</Text>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  lg: {
    fontSize: 30,
    fontWeight: '600',
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  md: {
    fontSize: 25,
    fontWeight: '500',
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  sm: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  tiny: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.BLACK,
    textAlign: 'center',
  },
});
