import { StackScreenProps } from '@react-navigation/stack';

export type HomeStackParamsList = {
  Home?: {
    name?: string;
  };
  Details?: {
    name?: string;
  };
};

export type HomeStackProps = StackScreenProps<
HomeStackParamsList,
  'Home'
>;

export type DetailsStackProps = StackScreenProps<
HomeStackParamsList,
  'Details'
>;
