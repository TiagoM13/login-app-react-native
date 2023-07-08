import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ScreensNavigationProps } from '@app/@types/navigation';

import { Header } from '@app/components/Header/Header';
import { InputField } from '@app/components/InputField/InputField';
import { Button } from '@app/components/Button/Button';
import { Link } from '@app/components/Link/Link';

import { FormDataSingIn } from '@app/entities/form';

import { sigInSchema } from '@app/schemas/schema';

import { styles } from '@app/screens/styles/styles';

const SignIn = () => {
  const { control, reset, handleSubmit, formState: { errors } } = useForm<FormDataSingIn>({
    resolver: yupResolver(sigInSchema)
  })

  const navigation = useNavigation<ScreensNavigationProps>();

  const onSubmit = (data: FormDataSingIn) => {
    console.log({ data })
    navigation.navigate('Main')
    reset()
  }

  return (
    <>
      <Header />
      <View style={styles.container}>

        <View style={{ marginBottom: 40 }}>
          <Text style={styles.title}>Login</Text>

          <InputField
            label='Email'
            controllerProps={{ name: 'email', control }}
            inputProps={{
              placeholder: 'Enter your email',
              keyboardType: 'email-address'
            }}
            errorMessage={errors.email?.message}
          />

          <InputField
            label='Password'
            controllerProps={{ name: 'password', control }}
            inputProps={{
              placeholder: 'Enter your password',
              secureTextEntry: true
            }}
            errorMessage={errors.password?.message}
          />

          <Button value="Sign In" onPress={handleSubmit(onSubmit)} />
        </View>

        <Text style={styles.help}>Don't have an account?</Text>
        <Link
          title='Create your account'
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </>
  );
};

export default SignIn;
