import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamsList } from '../types/AuthStackParams';

import { AuthContext } from '../Contexts/AuthContext';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Stack = createStackNavigator<AuthStackParamsList>();

const Routes: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
