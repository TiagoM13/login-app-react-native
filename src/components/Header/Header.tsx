import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} activeOpacity={0.7}>
        <Text>GoBack</Text>
      </TouchableOpacity>
    </View>
  );
};
