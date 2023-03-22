import { useState } from 'react';
import { Alert } from 'react-native';

export const useAuthentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // regex validate email
  const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // get email field value
  const onEmail = (value: string) => {
    setEmail(value);
  };

  // get password field value
  const onPassword = (value: string) => {
    setPassword(value);
  };

  const handleAuthentication = () => {
    // validate if fields are empty if else login user
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Invalid fields!', 'Fields must be filled');
    } else if (!REGEX_EMAIL.test(email)) {
      Alert.alert('Invalid email!', 'Email invalid');
    } else {
      Alert.alert('Authentication', 'User successfully authenticated!');
      console.warn({ email, password });
    }

    // reset fields
    setEmail('');
    setPassword('');
  };

  return {
    email,
    password,
    onEmail,
    onPassword,
    handleAuthentication,
  };
};
