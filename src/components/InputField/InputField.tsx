import React, { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';

import { InputFiedlProps } from '@app/entities/input';

import { styles } from './styles';

export const InputField = forwardRef<TextInput, InputFiedlProps>(({ label, errorMessage = null, inputProps, controllerProps }, ref) => {
  return (
    <Controller
      render={({ field }) => (
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            ref={ref}
            value={field.value}
            onChangeText={field.onChange}
            placeholderTextColor={'#606060'}
            style={styles.input}
            {...inputProps}
          />

          {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        </View>
      )}
      {...controllerProps}
    />
  );
});
