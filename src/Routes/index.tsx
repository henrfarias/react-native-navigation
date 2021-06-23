import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamsList } from '../types/AuthStackParams';

import AuthStack from './AuthStack';
import MainStack from './Tabs';

const Stack = createStackNavigator<AuthStackParamsList>();
const authUser = true;

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      {authUser ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
