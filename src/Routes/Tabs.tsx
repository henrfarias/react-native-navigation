import React from 'react';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Views/Home';
import Details from '../Views/Details';
import { MainTabsParamsList } from '../types/MainTabsParams';
import { IconName } from '../types/Ionicons';

const Tabs = createBottomTabNavigator<MainTabsParamsList>();

const MainStack: React.FC = () => {
  return (
    <>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: IconName;
              
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Details') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name='Home' component={Home} />
        <Tabs.Screen name='Details' component={Details} />
      </Tabs.Navigator>
    </>
  );
};

export default MainStack;
