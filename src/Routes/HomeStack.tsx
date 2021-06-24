import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { HomeStackParamsList } from '../types/HomeStackParams';
import DrawerScreens from './Drawer';
import Details from '../Views/Details';

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={DrawerScreens} />
      <Stack.Screen name='Details' component={Details}/>
    </Stack.Navigator>
  );
}

export default HomeStack;