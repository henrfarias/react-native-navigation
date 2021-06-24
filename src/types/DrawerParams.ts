import { DrawerNavigationProp } from '@react-navigation/drawer';

export type DrawerParamsList = {
  MainTabs?: {};
  Profile?: {};
  SignOut?: {};
}

export type MainDrawerProps = {
  navigation: DrawerNavigationProp<DrawerParamsList, 'MainTabs'>
}

export type ProfileDrawerProps = {
  navigation: DrawerNavigationProp<DrawerParamsList, 'Profile'>
}