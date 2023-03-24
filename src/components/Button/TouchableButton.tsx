import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { stylesButton, stylesText } from './styles';

interface TouchableButtonProps extends TouchableOpacityProps {
  value: string;
  background?: string;
}

export const TouchableButton = ({ value, background, ...rest }: TouchableButtonProps) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={stylesButton({ color: background }).button}>
      <Text style={stylesText.text}>{value}</Text>
    </TouchableOpacity>
  );
};
