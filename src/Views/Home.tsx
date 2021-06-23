import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import ScreenContainer from '../Components/ScreenContainer';
import { HomeStackProp } from '../types/RootStackParams';

const Home: React.FC<HomeStackProp> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Home Page</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
    </ScreenContainer>
  );
};

export default Home;
