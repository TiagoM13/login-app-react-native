import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ScreensNavigationProps } from '@app/@types/navigation';

import { Header } from '@app/components/Header/Header';
import { InputField } from '@app/components/InputField/InputField';
import { Button } from '@app/components/Button/Button';

import { FormDataSingUp } from '@app/entities/form';

import { signUpSchema } from '@app/schemas/schema';

import { styles } from '@app/screens/styles/styles';
import { Link } from '@app/components/Link/Link';

const SignUp = () => {
  const { control, reset, handleSubmit, formState: { errors } } = useForm<FormDataSingUp>({
    resolver: yupResolver(signUpSchema)
  });

  const navigation = useNavigation<ScreensNavigationProps>();

  const createAccount = (data: FormDataSingUp) => {
    console.log({ data })

    reset()
    navigation.navigate('SignIn', { email: data.email, password: data.password })
  }

  return (
    <>
      <Header />
      <View style={styles.container}>

        <View style={styles.content}>
          <Text style={styles.title}>Create account</Text>

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

          <Button value="Sign Up" onPress={handleSubmit(createAccount)} />
        </View>

        <Text style={styles.help}>already have an account?</Text>
        <Link
          title="Sign in now"
          onPress={() => navigation.navigate('SignIn', { email: '', password: '' })}
        />
      </View>
    </>
  );
};

export default SignUp;
