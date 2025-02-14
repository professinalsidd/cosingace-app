import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {COLORS} from '../../themes/theme';
import {InputTypes} from '../../types';

const InputComp = ({
  label,
  value,
  onChange,
  placeholder,
  style,
  secureTextEntry = false,
  readOnly,
}: InputTypes) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChange}
      mode="outlined"
      readOnly={readOnly}
      autoFocus
      focusable
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={COLORS.BLACK}
      theme={{colors: {outline: 'transparent', primary: 'transparent'}}}
      secureTextEntry={!isPasswordVisible}
      right={
        secureTextEntry && (
          <TextInput.Icon
            icon={isPasswordVisible ? 'eye' : 'eye-off'}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )
      }
    />
  );
};

export default InputComp;

const styles = StyleSheet.create({
  input: {
    marginVertical: '2%',
  },
});
