import { RouteProp } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type AuthStackParamsList = {
  SignIn: {} | undefined;
  Register: {} | undefined;
};

export type SignInStackProps = StackScreenProps<AuthStackParamsList, 'SignIn'>;

export type RegisterStackProps = StackScreenProps<
  AuthStackParamsList,
  'Register'
>;
