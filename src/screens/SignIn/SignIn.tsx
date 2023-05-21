import React from 'react';
import { Alert, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ScreensNavigationProps } from '@app/@types/navigation';

import { Header } from '@app/components/Header/Header';
import { InputField } from '@app/components/InputField/InputField';
import { TouchableButton } from '@app/components/Button/TouchableButton';
import { Link } from '@app/components/Link/Link';

import { FormDataSingIn } from '@app/entities/form';

import { sigInSchema } from '@app/schemas/schema';

import { styles } from '@app/screens/styles/styles';

type ParamsProps = {
  email: string
  password: string
}

const SignIn = () => {
  const { control, reset, handleSubmit, formState: { errors } } = useForm<FormDataSingIn>({
    resolver: yupResolver(sigInSchema)
  })

  const route = useRoute();
  const { email, password } = route.params as ParamsProps
  const navigation = useNavigation<ScreensNavigationProps>();

  console.log({ email, password })

  const onSubmit = (data: FormDataSingIn) => {
    const isvalid = email === '' && password === '';
    const userValid = data.email === email && data.password === password;

    if (isvalid) {
      Alert.alert('There is no user', 'Create your account')
    }

    if (!isvalid && userValid) {
      Alert.alert('Valid user', 'redirect home page')
      navigation.navigate('Main')
      console.log({ data })
    } else {
      Alert.alert('Invalid user', 'Please enter a valid email and password')
    }

    reset()
  }

  return (
    <>
      <Header />
      <View style={styles.container}>

        <View style={{ marginBottom: 40 }}>
          <Text style={styles.title}>Login</Text>

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
