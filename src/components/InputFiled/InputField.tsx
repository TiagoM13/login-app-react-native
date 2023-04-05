import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { InputFiedlProps } from '../../entities/input';

import { styles } from './styles';

export const InputFiled = ({ label, ...rest }: InputFiedlProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...rest} style={styles.input} placeholderTextColor={'#606060'} />
    </View>
  );
};
