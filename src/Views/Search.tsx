import React from 'react';
import { Text, Button } from 'react-native';
import { SearchTabProps } from '../types/TabsParams';

import ScreenContainer from '../Components/ScreenContainer';

const Search: React.FC<SearchTabProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Search Screen</Text>
      <Button 
        title='Search: React Native'
        onPress={() => navigation.navigate('Home', {
          screen: 'Details',
          params: { name: 'React Native Searched'}
        })}
      />
    </ScreenContainer>
  );
}

export default Search;
