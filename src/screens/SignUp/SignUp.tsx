import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '../../components/Header/Header';
import { InputFiled } from '../../components/InputFiled/InputField';
import { TouchableButton } from '../../components/Button/TouchableButton';
import { useCreateUser } from '../../hooks/create';

import { styles } from '../styles/styles';

const SignUp = () => {
  const { user, email, password, getUser, getEmail, getPassword, handleCreateAccount } = useCreateUser();

  return (
    <View>
      <Header />

      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <InputFiled
          label="Name"
          value={user}
          onChangeText={text => getUser(text)}
          keyboardType="default"
          placeholder="Enter your name"
        />

        <InputFiled
          label="Email"
          value={email}
          onChangeText={text => getEmail(text)}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <InputFiled
          label="Password"
          value={password}
          onChangeText={text => getPassword(text)}
          placeholder="Enter your password"
          secureTextEntry={true}
        />

        <TouchableButton value="Sign Up" onPress={handleCreateAccount} />
      </View>
    </View>
  );
};

export default SignUp;
