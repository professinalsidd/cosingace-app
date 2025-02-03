import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLORS, LAYOUT} from '../../themes/theme';

const ButtonComp = ({title, onClick, style}: ButtonTypes) => {
  return (
    <Pressable style={[LAYOUT.flexCenter, styles.button]} onPress={onClick}>
      <Text style={[style, styles.btnText]}>{title}</Text>
    </Pressable>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.LIGHT_GREEN,
    borderRadius: 5,
    height: '10%',
    marginVertical: '2%',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
