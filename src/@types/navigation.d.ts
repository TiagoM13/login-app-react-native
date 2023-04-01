import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackNavigatorParamListType = {
  Home: undefined;
  Main: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type ScreensNavigationProps = NativeStackNavigationProp<StackNavigatorParamListType>;
