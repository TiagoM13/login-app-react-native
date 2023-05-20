import React from 'react';
import { Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from '@app/components/Header/Header';
import { InputField } from '@app/components/InputField/InputField';
import { TouchableButton } from '@app/components/Button/TouchableButton';
import { FormDataSingIn } from '@app/entities/form';

import { styles } from '@app/screens/styles/styles';
import { sigInSchema } from '@app/schemas/schema';

const SignIn = () => {
  const { control, reset, handleSubmit, formState: { errors } } = useForm<FormDataSingIn>({
    resolver: yupResolver(sigInSchema)
  })

  const onSubmit = (data: FormDataSingIn) => {
    console.log({ data })

    reset()
  }

  return (
    <View>
      <Header />

      <View style={styles.container}>
        <Text style={styles.title}>Login In</Text>

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
          )}
        />

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
          )}
        />

        <TouchableButton value="Sign In" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default SignIn;
