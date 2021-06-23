import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import ScreenContainer from '../Components/ScreenContainer';
import { HomeTabProps } from '../types/MainTabsParams';

const Home: React.FC<HomeTabProps> = ({ navigation }) => {
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
