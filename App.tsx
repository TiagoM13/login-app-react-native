import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Navigator from './src/routes/Navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
