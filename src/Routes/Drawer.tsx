import React from 'react';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import { DrawerParamsList } from '../types/DrawerParams';

import MainTabs from './MainTabs';
import Profile from '../Views/Profile';

const Drawer = createDrawerNavigator<DrawerParamsList>();

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <>
      <DrawerItemList {...props} />
      <DrawerItem label='SignOut' onPress={() => alert('sign out!')} />
    </>
  );
};

const DrawerScreens: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='MainTabs' component={MainTabs} />
      <Drawer.Screen name='Profile' component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerScreens;
