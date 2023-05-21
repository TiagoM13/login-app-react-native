import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import img from '@app/assets/img/user.png';

import { ScreensNavigationProps } from '@app/@types/navigation';
import { Button } from '@app/components/Button/Button';
import { THEME } from '@app/utils/theme';

import { styles } from './styles';

const Home = () => {
  const navigation = useNavigation<ScreensNavigationProps>();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img} />

      <View style={styles.content}>
        <Text style={styles.text}>Hello!!!</Text>
        <Text style={styles.subtitle}>You need to create an account or login to log in to the app</Text>
      </View>

      <Button value="Login" onPress={() => navigation.navigate('SignIn', { email: '', password: '' })} />
      <Button
        value="Sign Up"
        background={THEME.RED_500}
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default Home;
