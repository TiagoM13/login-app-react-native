import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

interface InputFiedlProps extends TextInputProps {
  label: string;
}

export const InputFiled = ({ label, ...rest }: InputFiedlProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...rest} style={styles.input} placeholderTextColor={'#606060'} />
    </View>
  );
};
