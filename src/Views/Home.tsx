import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import ScreenContainer from '../Components/ScreenContainer';
import { HomeStackProps } from '../types/HomeStackParams';

const Home: React.FC<HomeStackProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Home Page</Text>
      <Button
        title='React Native'
        onPress={() => navigation.navigate('Details', { name: 'React Native' })}
      />
    </ScreenContainer>
  );
};

export default Home;
