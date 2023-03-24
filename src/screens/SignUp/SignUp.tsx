import React from 'react';
import { Text, View } from 'react-native';
import { TouchableButton } from '../../components/Button/TouchableButton';
import { InputFiled } from '../../components/InputFiled/InputField';

import { styles } from '../styles/styles';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <InputFiled label="Name" keyboardType="default" placeholder="Enter your name" />

      <InputFiled label="Email" placeholder="Enter your email" keyboardType="email-address" />

      <InputFiled label="Password" placeholder="Enter your password" secureTextEntry={true} />

      <TouchableButton value="Sign Up" onPress={() => console.warn('Enviado com sucesso!')} />
    </View>
  );
};

export default SignUp;
