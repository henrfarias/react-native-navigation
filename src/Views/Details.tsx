import React from 'react';
import { Text } from 'react-native';
import ScreenContainer from '../Components/ScreenContainer';
import { DetailsTabProps } from '../types/MainTabsParams';

const Details: React.FC<DetailsTabProps> = () => {

  return (
    <ScreenContainer>
      <Text>Details Page</Text>
    </ScreenContainer>
  );
}

export default Details;