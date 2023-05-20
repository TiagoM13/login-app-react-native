import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '@app/components/Header/Header';
import { InputField } from '@app/components/InputField/InputField';
import { TouchableButton } from '@app/components/Button/TouchableButton';

import { useCreateUser } from '@app/hooks/create';

import { styles } from '@app/screens/styles/styles';

const SignUp = () => {
  const { user, email, password, setUser, setEmail, setPassword, handleCreateAccount } = useCreateUser();

  return (
    <View>
      <Header />

      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <InputField
          label="Name"
          value={user}
          onChangeText={text => setUser(text)}
          keyboardType="default"
          placeholder="Enter your name"
        />

        <InputField
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <InputField
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Enter your password"
          secureTextEntry={true}
        />

        <TouchableButton value="Sign Up" onPress={handleCreateAccount} />
      </View>
    </View>
  );
};

export default SignUp;
