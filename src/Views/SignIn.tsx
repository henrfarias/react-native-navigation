import React from 'react';
import { Text, Button } from 'react-native';

import ScreenContainer from '../Components/ScreenContainer';
import { SignInStackProps } from '../types/AuthStackParams';

const SignIn: React.FC<SignInStackProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>SignIn Screen</Text>
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </ScreenContainer>
  );
};

export default SignIn;
