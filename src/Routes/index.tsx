import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Views/Home';
import Details from '../Views/Details';
import { RootStackParamsList } from '../types/RootStackParams';

const Stack = createStackNavigator<RootStackParamsList>();

const Routes: React.FC = () => {
 return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
   </NavigationContainer>
 ); 
}

export default Routes;
