import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import ScreenContainer from '../Components/ScreenContainer';
import { AuthContext } from '../Contexts/AuthContext';
import { SignInStackProps } from '../types/AuthStackParams';

const SignIn: React.FC<SignInStackProps> = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>SignIn Screen</Text>
      <Button title="Sign In" onPress={signIn} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </ScreenContainer>
  );
};

export default SignIn;
