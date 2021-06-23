import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamsList } from '../types/AuthStackParams';
import SignIn from '../Views/SignIn';
import Register from '../Views/Register';

const Stack = createStackNavigator<AuthStackParamsList>();

const AuthStack: React.FC = () => {
  return (
    <>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>
    </>
  ); 
}

 export default AuthStack;