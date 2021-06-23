import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamsList = {
  Home: { teste: string;} | undefined;
  Details: {} | undefined;
}

export type HomeStackProp = {
  route: RouteProp<RootStackParamsList, 'Home'>;
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}

export type DetailsStackProp = {
  route: RouteProp<RootStackParamsList, 'Details'>;
  navigation: StackNavigationProp<RootStackParamsList, 'Details'>;
}

