import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { HomeStackParamsList } from '../types/HomeStackParams';
import Home from '../Views/Home';
import Details from '../Views/Details';

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen 
        name='Details'
        component={Details}
        options={({ route }) => ({
          title: route.params?.name
        })}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;