import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../Contexts/AuthContext';

import AuthStack from './AuthStack';
import DrawerScreens from './Drawer';

const Routes: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? < DrawerScreens /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
