import React from 'react';
import { Button,Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Profile: { name: string }; 
  Weather: undefined; 
  
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
const HomeScreen = ({ navigation }: Props) => {
  return (
    <View>
          <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
              <Button
      title="Go to Weather"
      onPress={() =>
        navigation.navigate('Weather')
      }
    />
    </View>

    
  );
};

export default HomeScreen;