import React from 'react';
import { View } from 'react-native';
import { TouchableButton } from '../components/Button/TouchableButton';
import { InputFiled } from '../components/InputFiled/InputField';
import { useAuthentication } from '../hooks/auth';

import { styles } from './styles';

const SignIn = () => {
  const { email, password, onEmail, onPassword, handleAuthentication } = useAuthentication();

  return (
    <View style={styles.container}>
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
  );
};

export default SignIn;
