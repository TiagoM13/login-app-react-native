import React from 'react';
import { Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from '@app/components/Header/Header';
import { InputField } from '@app/components/InputField/InputField';
import { TouchableButton } from '@app/components/Button/TouchableButton';

import { FormData } from '@app/entities/form';

import { signUpSchema } from '@app/schemas/schema';

import { styles } from '@app/screens/styles/styles';

const SignUp = () => {
  const { control, reset, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(signUpSchema)
  });

  const createAccount = (data: FormData) => {
    console.log({ data })

    reset()
  }

  return (
    <View>
      <Header />

      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <InputField
              label="Name"
              value={value}
              onChangeText={onChange}
              keyboardType="default"
              placeholder="Enter your name"
              errorMessage={errors.name?.message}
            />
          )} />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <InputField
              label="Email"
              value={value}
              onChangeText={onChange}
              placeholder="Enter your email"
              keyboardType="email-address"
              errorMessage={errors.email?.message}
            />
          )} />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <InputField
              label="Password"
              value={value}
              onChangeText={onChange}
              placeholder="Enter your password"
              secureTextEntry={true}
              errorMessage={errors.password?.message}
            />
          )} />

        <TouchableButton value="Sign Up" onPress={handleSubmit(createAccount)} />
      </View>
    </View>
  );
};

export default SignUp;
