import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ButtonProps } from '@app/entities/button';

import { stylesButton, stylesText } from './styles';

export const Button = ({ value, background, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={stylesButton({ color: background }).button}>
      <Text style={stylesText.text}>{value}</Text>
    </TouchableOpacity>
  );
};
