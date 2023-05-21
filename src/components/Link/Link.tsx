import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type LinkProps = TouchableOpacityProps & {
  title: string
}

export const Link = ({ title, ...rest }: LinkProps) => {
  return (
    <TouchableOpacity
      style={styles.buttonLink}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );
}
