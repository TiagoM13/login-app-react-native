import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackNavigatorParamListType } from '../@types/navigation';

import Home from '../screens/Home/Home';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';

const Stack = createNativeStackNavigator<StackNavigatorParamListType>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
