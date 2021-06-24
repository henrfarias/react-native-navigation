import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsParamsList } from '../types/TabsParams';
import { IconName } from '../types/Ionicons';

import Home from '../Views/Home';
import Search from '../Views/Search';
import HomeStack from './HomeStack';

const Tabs = createBottomTabNavigator<TabsParamsList>();

const MainTabs: React.FC = () => {
  return (
    <>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: IconName;
              
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name='Home' component={HomeStack} />
        <Tabs.Screen name='Search' component={Search} />
      </Tabs.Navigator>
    </>
  );
};

export default MainTabs;
