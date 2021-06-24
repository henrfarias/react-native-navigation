import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type MainTabsParamsList = {
  Home?: {};
  Details?: {};
};

export type HomeTabProps = BottomTabScreenProps<
  MainTabsParamsList,
  'Home'
>;

export type DetailsTabProps = BottomTabScreenProps<
  MainTabsParamsList,
  'Details'
>;
