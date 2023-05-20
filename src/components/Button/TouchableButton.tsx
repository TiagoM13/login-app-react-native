import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { TouchableButtonProps } from '@app/entities/button';

import { stylesButton, stylesText } from './styles';

export const TouchableButton = ({ value, background, ...rest }: TouchableButtonProps) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={stylesButton({ color: background }).button}>
      <Text style={stylesText.text}>{value}</Text>
    </TouchableOpacity>
  );
};
