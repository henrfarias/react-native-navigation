import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import ScreenContainer from '../Components/ScreenContainer';
import { DetailsStackProp } from '../types/RootStackParams';

const Details: React.FC<DetailsStackProp> = ({ navigation }) => {

  return (
    <ScreenContainer>
      <Text>Details Page</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    </ScreenContainer>
  );
}

export default Details;