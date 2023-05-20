import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '@app/components/Header/Header';
import { InputField } from '@app/components/InputField/InputField';
import { TouchableButton } from '@app/components/Button/TouchableButton';

import { useAuthentication } from '@app/hooks/auth';

import { styles } from '@app/screens/styles/styles';

const SignIn = () => {
  const { email, password, setEmail, setPassword, handleAuthentication } = useAuthentication();

  return (
    <View>
      <Header />

      <View style={styles.container}>
        <Text style={styles.title}>Login In</Text>

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

        <TouchableButton value="Sign In" onPress={handleAuthentication} />
      </View>
    </View>
  );
};

export default SignIn;
