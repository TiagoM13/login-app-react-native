import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { THEME } from '@app/utils/theme';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: THEME.BLACK,
  },
});

export default Main;
