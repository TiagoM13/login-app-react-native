import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '../../components/Header/Header';
import { InputFiled } from '../../components/InputFiled/InputField';
import { TouchableButton } from '../../components/Button/TouchableButton';

import { useAuthentication } from '../../hooks/auth';

import { styles } from '../styles/styles';

const SignIn = () => {
  const { email, password, onEmail, onPassword, handleAuthentication } = useAuthentication();

  return (
    <View>
      <Header />

      <View style={styles.container}>
        <Text style={styles.title}>Login In</Text>

        <InputFiled
          label="Email"
          value={email}
          onChangeText={text => onEmail(text)}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <InputFiled
          label="Password"
          value={password}
          onChangeText={text => onPassword(text)}
          placeholder="Enter your password"
          secureTextEntry={true}
        />

        <TouchableButton value="Sign In" onPress={handleAuthentication} />
      </View>
    </View>
  );
};

export default SignIn;
