import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import ScreenContainer from '../Components/ScreenContainer';
import { HomeTabProps } from '../types/MainTabsParams';

const Home: React.FC<HomeTabProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Home Page</Text>
    </ScreenContainer>
  );
};

export default Home;
