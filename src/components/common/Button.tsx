import {Pressable, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS, LAYOUT} from '../../themes/theme';
import {ButtonTypes} from '../../types';

const ButtonComp: React.FC<ButtonTypes> = ({
  title,
  onPress,
  style,
  containerStyle,
}) => {
  return (
    <Pressable
      android_ripple={{color: COLORS.GREEN}}
      style={[LAYOUT.flexCenter, styles.button, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.btnText, style]}>{title}</Text>
    </Pressable>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.LIGHT_GREEN,
    borderRadius: 5,
    height: 50,
    marginVertical: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.BLACK,
  } as TextStyle,
});
