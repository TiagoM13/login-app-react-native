import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { InputFiedlProps } from '@app/entities/input';

import { styles } from './styles';

export const InputField = ({ label, errorMessage = null, ...rest }: InputFiedlProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...rest} style={styles.input} placeholderTextColor={'#606060'} />

      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};
