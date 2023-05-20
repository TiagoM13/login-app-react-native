import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreensNavigationProps } from '@app/@types/navigation';
import { REGEX_EMAIL } from '@app/utils/regex';

export const useAuthentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<ScreensNavigationProps>();

  const handleAuthentication = () => {
    // validate if fields are empty if else login user
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Invalid fields!', 'Fields must be filled');
    } else if (!REGEX_EMAIL.test(email)) {
      Alert.alert('Invalid email!', 'Email invalid');
    } else {
      Alert.alert('Authentication', 'User successfully authenticated!');

      navigation.navigate('Main');
    }

    // reset fields
    setEmail('');
    setPassword('');
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleAuthentication,
  };
};
