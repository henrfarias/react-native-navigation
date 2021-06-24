import React from 'react';
import { Text } from 'react-native';
import ScreenContainer from '../Components/ScreenContainer';
import { DetailsStackProps } from '../types/HomeStackParams';

const Details: React.FC<DetailsStackProps> = ({ route }) => {

  return (
    <ScreenContainer>
      <Text>Details Page</Text>
      { route.params?.name && <Text>{route.params.name}</Text>}
    </ScreenContainer>
  );
}

export default Details;