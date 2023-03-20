/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableButton } from '../components/Button/TouchableButton';
import { InputFiled } from '../components/InputFiled/InputField';

import { styles } from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // validate email and password
    // send login request to server
    // navigate to home screen if successful

    console.log({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <InputFiled
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <InputFiled
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <TouchableButton
        value="Sign In"
        onPress={handleLogin}
      />

    </View>
  );
};

export default SignIn;
