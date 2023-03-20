/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        activeOpacity={0.7}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SignIn;
