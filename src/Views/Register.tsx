import React from 'react';
import { Text } from 'react-native';

import ScreenContainer from '../Components/ScreenContainer';
import { RegisterStackProps } from '../types/AuthStackParams'; 

const Register: React.FC<RegisterStackProps> = () => {
  return (
    <ScreenContainer>
      <Text>Register Page</Text>
    </ScreenContainer>
  );
};

export default Register;
