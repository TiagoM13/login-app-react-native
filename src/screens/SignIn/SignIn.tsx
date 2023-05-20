import React from 'react';
import { Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Header } from '@app/components/Header/Header';
import { InputField } from '@app/components/InputField/InputField';
import { TouchableButton } from '@app/components/Button/TouchableButton';

import { styles } from '@app/screens/styles/styles';
import { REGEX_EMAIL } from '@app/utils/regex';

type FormData = {
  email: string,
  password: string
}

const siginSchema = yup.object({
  email: yup
    .string()
    .required('Informe um email')
    .matches(REGEX_EMAIL, 'Informe um email válido'),
  password: yup
    .string()
    .required('Informe um password')
})

const SignIn = () => {
  const { control, reset, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(siginSchema)
  })

  const onSubmit = (data: FormData) => {
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
