import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackNavigatorParamListType = {
  Home: undefined;
  Main: undefined;
  SignIn: {
    email?: string
    password?: string
  };
  SignUp: undefined;
};

export type ScreensNavigationProps = NativeStackNavigationProp<StackNavigatorParamListType>;
