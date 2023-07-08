import React, { useRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
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

  const refEmail = useRef<TextInput>(null)
  const refPassword = useRef<TextInput>(null)

  const navigation = useNavigation<ScreensNavigationProps>();

  const createAccount = (data: FormDataSingUp) => {
    console.log({ data })

    reset()
    navigation.navigate('SignIn')
  }

  return (
    <>
      <Header />
      <View style={styles.container}>

        <View style={styles.content}>
          <Text style={styles.title}>Create account</Text>

          <InputField
            label="Name"
            controllerProps={{ name: 'name', control }}
            inputProps={{
              keyboardType: "default",
              placeholder: "Enter your name",
              onSubmitEditing: () => refEmail.current?.focus(),
              returnKeyType: "next"
            }}
            errorMessage={errors.name?.message}
          />

          <InputField
            ref={refEmail}
            label="Email"
            controllerProps={{ name: 'email', control }}
            inputProps={{
              placeholder: "Enter your email",
              keyboardType: "email-address",
              onSubmitEditing: () => refPassword.current?.focus(),
              returnKeyType: "next"
            }}
            errorMessage={errors.email?.message}
          />

          <InputField
            ref={refPassword}
            label="Password"
            controllerProps={{ name: 'password', control }}
            inputProps={{
              placeholder: "Enter your password",
              secureTextEntry: true,
              onSubmitEditing: handleSubmit(createAccount)
            }}
            errorMessage={errors.password?.message}
          />

          <Button value="Sign Up" onPress={handleSubmit(createAccount)} />
        </View>

        <Text style={styles.help}>already have an account?</Text>
        <Link
          title="Sign in now"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </>
  );
};

export default SignUp;
