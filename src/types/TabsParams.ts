import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type TabsParamsList = {
  Home?: {},
  Search?: {}
}

export type HomeTabProps = {
  navigation: BottomTabNavigationProp<TabsParamsList, 'Home'>
}

export type SearchTabProps = {
  navigation: BottomTabNavigationProp<TabsParamsList, 'Search'>
}