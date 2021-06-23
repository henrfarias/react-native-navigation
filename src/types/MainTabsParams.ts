import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type MainTabsParamsList = {
  Home: {} | undefined;
  Details: {} | undefined;
};

export type HomeTabProps = BottomTabScreenProps<
  MainTabsParamsList,
  'Home'
>;

export type DetailsTabProps = BottomTabScreenProps<
  MainTabsParamsList,
  'Details'
>;
