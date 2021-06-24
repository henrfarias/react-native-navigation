import React from 'react';
import { Text, Button } from 'react-native';
import { ProfileDrawerProps } from '../types/DrawerParams';

import ScreenContainer from '../Components/ScreenContainer';
import { DrawerActions } from '@react-navigation/native';

const Profile: React.FC<ProfileDrawerProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button
        title='Open menu'
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </ScreenContainer>
  );
};

export default Profile;
