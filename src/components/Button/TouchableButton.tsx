/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface TouchableButtonProps extends TouchableOpacityProps {
  value: string;
}

export const TouchableButton = ({ value, ...rest }: TouchableButtonProps) => {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      style={styles.button}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};
