import React from 'react';
import { Button,Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Profile: { name: string }; 
};
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route:any;
};

const ProfileScreen = ({ navigation, route }: Props) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
export default ProfileScreen;